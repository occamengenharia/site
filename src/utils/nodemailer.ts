import nodemailer from 'nodemailer'
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
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_FROM_PASSWORD
    }
  })
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
    return 'Erro ao enviar o email'
  }

  return 'Sucesso'
}

export { createTemplate, sendMail }
