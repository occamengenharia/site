import { NowRequest, NowResponse } from '@vercel/node'
import { sendMail, createTemplate } from '@/utils/nodemailer'
import api from '@/services/api'

// import handlebars from 'handlebars'
// import fs from 'fs'
// import path from 'path'

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
  const { data } = await api.get<ISubscription[]>(
    `registrations-processes?email=${email}`
  )

  if (data.length <= 0) {
    return response.status(404).json({ error: 'Subscription not found' })
  }

  await sendMail({
    to: process.env.EMAIL_TO,
    html: `<p> ${email} fez uma nova requisição de dados</p>`,
    subject: 'Nova requisição'
  })

  const subscription = data[0]

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

  const template_request = createTemplate('user-request-data-ps.html')
  const html_request = template_request(replacements)

  const res = await sendMail({
    to: email,
    html: html_request,
    subject: 'Dados inscrição processo seletivo',
    bcc: process.env.EMAIL_TO,
    replyTo: process.env.EMAIL_TO
  })

  if (res.includes('Erro')) {
    return response.status(400).json({ error: 'error' })
  }

  return response.status(204).send('')
}
