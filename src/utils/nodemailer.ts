import nodemailer from 'nodemailer'

interface ISendEmail {
  subject: string
  html: string
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

const sendMail = async ({ subject, html }: ISendEmail): Promise<string> => {
  const transporter = await createTransporter()

  const emailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject,
    html
  } as nodemailer.SendMailOptions

  try {
    console.log(emailOptions)
    await transporter.sendMail(emailOptions)
  } catch (error) {
    return 'Erro ao enviar o email'
  }

  return 'Sucesso'
}

export default sendMail
