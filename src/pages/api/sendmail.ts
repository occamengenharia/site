import { NowRequest, NowResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

export default async (request: NowRequest, response: NowResponse) => {
  const { email, subject } = request.body

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_FROM_PASSWORD
    }
  })

  const emailToBeSent = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject,
    text: 'Email enviado com node.js'
  }

  try {
    await transporter.sendMail(emailToBeSent)
  } catch (error) {
    response.statusCode = 401
    return response.json({ ok: false })
  }

  response.statusCode = 200
  return response.json({ ok: true })
}
