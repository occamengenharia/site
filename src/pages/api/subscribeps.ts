import { NowRequest, NowResponse } from '@vercel/node'
import { createTemplate, sendMail } from '@/utils/nodemailer'

interface IRequest {
  name: string
  course: string
  ra: string
  period: string
  email: string
  sector: string
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
    return response.status(401).json({ error: 'error post required' })
  }

  const {
    name,
    course,
    ra,
    period,
    email,
    sector,
    answer1,
    answer2,
    answer3,
    answer4
  }: IRequest = request.body

  if (!email.match(/\S+@\S+.\S+/gi)) {
    return response.status(403).json({ error: 'Invalid email' })
  }

  const replacements = {
    name,
    course,
    ra,
    period,
    email,
    sector,
    answer1,
    answer2,
    answer3,
    answer4
  }

  const template_occam = createTemplate('occam-subscribe-ps.html')
  const template_user = createTemplate('user-subscribe-ps.html')

  const html_occam = template_occam(replacements)
  const html_user = template_user(replacements)

  const res_occam_promise = sendMail({
    to: process.env.EMAIL_TO,
    html: html_occam,
    subject: 'Nova inscrição no processo seletivo OCCAM'
  })

  const res_user_promise = sendMail({
    to: email,
    html: html_user,
    subject: 'Confirmação de inscrição processo seletivo OCCAM',
    cc: process.env.EMAIL_TO,
    replyTo: process.env.EMAIL_TO
  })

  const [res_occam, res_user] = await Promise.all([
    res_occam_promise,
    res_user_promise
  ])

  if (res_occam.includes('Erro') || res_user.includes('Erro')) {
    return response.status(400).json({ error: 'error' })
  }

  return response.status(204).send('')
}
