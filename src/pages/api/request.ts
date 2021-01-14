import { NowRequest, NowResponse } from '@vercel/node'
import handlebars from 'handlebars'
import fs from 'fs'
import { sendMail } from '@/utils/nodemailer'
import api from '@/services/api'
import path from 'path'

interface IRequest {
  email: string
}
interface ISubscription {
  name: string
  course: string
  ra: string
  period: string
  email: string
  interest_area: string
  answer1: string
  answer2: string
  answer3: string
  answer4: string
}
export default async (
  request: NowRequest,
  response: NowResponse
): Promise<NowResponse> => {
  if (request.method !== 'POST') {
    return response.status(401).json({ error: 'Error post required' })
  }

  const { email }: IRequest = request.body

  if (!email.match(/\S+@\S+.\S+/gi)) {
    return response.status(403).json({ error: 'Invalid email' })
  }

  await sendMail({
    to: process.env.MAIL_TO,
    html: `<p> ${email} fez uma nova requisição de dados</p>`,
    subject: 'Nova requisição'
  })

  const { data } = await api.get<ISubscription[]>(
    `registrations-processes?email=${email}`
  )

  if (data.length <= 0) {
    return response.status(404).json({ error: 'Subscription not found' })
  }

  const subscription = data[0]

  const filePath = path.resolve('src', 'emails', 'user-request-data-ps.html')
  const source = fs.readFileSync(filePath, 'utf-8').toString()
  const template = handlebars.compile(source)
  const replacements = {
    name: subscription.name,
    course: subscription.course,
    ra: subscription.ra,
    period: subscription.period,
    email: subscription.email,
    interest_area: subscription.interest_area,
    answer1: subscription.answer1,
    answer2: subscription.answer2,
    answer3: subscription.answer3,
    answer4: subscription.answer4
  }

  const html = template(replacements)

  const res = await sendMail({
    to: email,
    html,
    subject: 'Dados inscrição processo seletivo',
    cc: process.env.MAIL_TO,
    replyTo: process.env.MAIL_TO
  })

  if (res.includes('Erro')) {
    return response.status(400).json({ error: 'error' })
  }

  return response.status(204).send('')
}
