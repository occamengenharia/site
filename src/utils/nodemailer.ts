import nodemailer, { TransportOptions } from 'nodemailer'
import handlebars from 'handlebars'

import fs from 'fs'
import path from 'path'
interface ISendEmail {
  to: string
  subject: string
  html: string
  bcc?: string
  replyTo?: string
}

function createTemplate(nameHTML: string): HandlebarsTemplateDelegate {
  const file = path.resolve('src', 'emails', nameHTML)
  const source = fs.readFileSync(file, 'utf-8').toString()
  const template = handlebars.compile(source)

  return template
}

async function createTransporter() {
  const transporterConfig = {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  } as TransportOptions
  const transporter = nodemailer.createTransport(transporterConfig)
  return transporter
}

const sendMail = async ({
  to,
  subject,
  html,
  replyTo,
  bcc
}: ISendEmail): Promise<string> => {
  const transporter = await createTransporter()

  const emailOptions = {
    from: process.env.EMAIL_FROM,
    to,
    subject,
    html,
    bcc: bcc,
    replyTo
  } as nodemailer.SendMailOptions
  try {
    await transporter.sendMail(emailOptions)
  } catch (error) {
    delete emailOptions.html
    return 'Erro ao enviar o email'
  }

  return 'Sucesso'
}

export { createTemplate, sendMail }
