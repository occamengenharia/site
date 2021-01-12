import { NowRequest, NowResponse } from '@vercel/node'
import handlebars from 'handlebars'

import fs from 'fs'
import path from 'path'

import sendMail from '@/utils/nodemailer'

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

  const filePath = path.resolve('src', 'emails', 'occam-subscribe-ps.html')
  const source = fs.readFileSync(filePath, 'utf-8').toString()
  const template = handlebars.compile(source)

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

  const html = template(replacements)

  const res = await sendMail({
    html,
    subject: 'Nova inscrição no processo seletivo OCCAM'
  })

  if (res.includes('Erro')) {
    return response.status(400).json({ error: 'error' })
  }

  return response.status(204).send('')
}
