import { NowRequest, NowResponse } from '@vercel/node'
import nodemailer from 'nodemailer'
import handlebars from 'handlebars'
import fs from 'fs'

export default async (
  request: NowRequest,
  response: NowResponse
): Promise<NowResponse> => {
  // const { email, subject } = request.body
  const email = 'emailvagabundooccam@gmail.com'
  const subject = 'teeee'

  const filePath = 'src/emails/occam-subscribe-ps.html'
  const source = fs.readFileSync(filePath, 'utf-8').toString()
  const template = handlebars.compile(source)
  const replacements = {
    name: 'Erica'
  }

  const htmlToSend = template(replacements)

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
    html: htmlToSend
  }

  try {
    await transporter.sendMail(emailToBeSent)
  } catch (error) {
    response.statusCode = 401
    return response.json({ ok: false })
  }

  response.statusCode = 200
  // return response.json({ ok: true })
  return response.json({ Hello: 'World' })
}
