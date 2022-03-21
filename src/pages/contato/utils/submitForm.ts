import { RefObject } from 'react'
import axios from 'axios'
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'

import getValidationErrors from '@/utils/getValidationErros'

import { FeedbackStatus } from '@/components/FeedbackModal/types'

export interface ContactFormData {
  name: string
  email: string
  phone: string
  answer: string
}

interface SubmitStatusResponse {
  status: FeedbackStatus | 'incomplete'
}

export const submitForm = async (
  data: ContactFormData,
  formRef: RefObject<FormHandles>
): Promise<SubmitStatusResponse> => {
  formRef.current?.setErrors({})

  try {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email('Informe um email válido')
        .required('E-mail é obrigatório'),
      name: Yup.string().required('Nome é obrigatório'),
      phone: Yup.string().required('Telefone é obrigatório'),
      answer: Yup.string().required('Mensagem é obrigatória')
    })

    await schema.validate(data, {
      abortEarly: false
    })

    const response = await axios.post('/api/contact', data)

    if (response.status > 399) {
      return {
        status: 'warning'
      }
    }

    formRef.current.reset()

    return {
      status: 'success'
    }
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      const errors = getValidationErrors(error)
      formRef.current?.setErrors(errors)

      return {
        status: 'incomplete'
      }
    }

    return {
      status: 'warning'
    }
  }
}
