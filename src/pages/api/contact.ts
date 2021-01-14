import { NowRequest, NowResponse } from '@vercel/node'
import handlebars from 'handlebars'

import fs from 'fs'
import path from 'path'

import { sendMail } from '@/utils/nodemailer'

interface IRequest {
  name: string
  email: string
  phone: string
  answer: string
}

export default async (
  request: NowRequest,
  response: NowResponse
): Promise<NowResponse> => {
  if (request.method !== 'POST') {
    return response.status(401).json({ error: 'error post required' })
  }
  const { name, email, phone, answer }: IRequest = request.body

  if (!email.match(/\S+@\S+.\S+/gi)) {
    return response.status(403).json({ error: 'Invalid email' })
  }

  const filePath = path.resolve('src', 'emails', 'message-contact.html')
  const source = fs.readFileSync(filePath, 'utf-8').toString()
  const template = handlebars.compile(source)
  const replacements = {
    name,
    email,
    phone,
    answer
  }

  const html = template(replacements)

  const res = await sendMail({
    to: process.env.MAIL_TO,
    html,
    subject: 'Novo contato do site'
  })

  if (res.includes('Erro')) {
    return response.status(400).json({ error: 'error' })
  }

  return response.status(204).send('')
}
