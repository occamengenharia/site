import { NowRequest, NowResponse } from '@vercel/node'
import { sendMail, createTemplate } from '@/utils/nodemailer'

// import handlebars from 'handlebars'
// import fs from 'fs'
// import path from 'path'
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

  const replacements = {
    name,
    email,
    phone,
    answer
  }

  const template_contact = createTemplate('message-contact.html')
  const html_contact = template_contact(replacements)

  const res_contact = await sendMail({
    to: process.env.EMAIL_TO,
    html: html_contact,
    subject: 'Novo contato do site'
  })

  if (res_contact.includes('Erro')) {
    return response.status(400).json({ error: 'error' })
  }

  return response.status(204).send('')
}
