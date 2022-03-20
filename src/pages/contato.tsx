import { useCallback, useRef, useState, useMemo } from 'react'
import Modal from 'react-responsive-modal'
import axios from 'axios'
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'

import { Container, FormStyled, InputsContainer } from '@/styles/pages/Contact'
import SEO from '@/components/SEO'
import Input from '@/components/Input'
import Textarea from '@/components/Textarea'
import getValidationErrors from '@/utils/getValidationErros'
import Button from '@/components/Button'
import PageHeader from '@/components/PageHeader'
import FeedbackModal from '@/components/FeedbackModal'
import {
  FeedbackModalContent,
  FeedbackStatus
} from '@/components/FeedbackModal/types'
import ErrorModal from '@/components/Modals/ErrorModal'

interface IContactFormData {
  name: string
  email: string
  phone: string
  answer: string
}

const description =
  'Envie um e-mail para gente, vamos ficar felizes em ajudar em seu projeto, ideia e / ou empresa - OCCAM Engenharia empresa júnior de engenharia de computação'

const Contact: React.FC = () => {
  const [feedbackModalIsOpen, setFeedbackModalIsOpen] = useState(false)
  const [feedbackStatus, setFeedbackStatus] = useState<FeedbackStatus>(
    'success'
  )
  const [isSendingMessage, setIsSendingMessage] = useState(false)
  const formRef = useRef<FormHandles>(null)

  const feedbackModalContent = useMemo<FeedbackModalContent>(() => {
    if (feedbackStatus === 'success') {
      return {
        title: 'Mensagem enviada com sucesso',
        message:
          'Enviamos um e-mail copia para você. Logo entraremos em contato',
        primaryButtonText: 'Entendi',
        onPrimaryButtonClick: () => setFeedbackModalIsOpen(false)
      }
    }

    return {
      title: 'Não foi possível enviar a mensagem',
      message:
        'Ocorreu um erro ao enviar a mensagem, tente novamente mais tarde',
      primaryButtonText: 'Voltar',
      onPrimaryButtonClick: () => console.log('aaaaaaa')
    }
  }, [feedbackStatus])

  const handleSubmit = useCallback(async (data: IContactFormData) => {
    formRef.current?.setErrors({})
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Informe um email válido')
          .required('E-mail é obrigatório'),
        name: Yup.string().required('Nome é obrigatório'),
        phone: Yup.string().required('Telefone é obrigatório'),
        answer: Yup.string().required('Descrição é obrigatória')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      setIsSendingMessage(true)

      const response = await axios.post('/api/contact', data)

      if (response.status > 399) {
        setFeedbackModalIsOpen(true)
        setFeedbackStatus('warning')
        return
      }

      formRef.current.reset()
      setFeedbackModalIsOpen(true)
      setFeedbackStatus('success')
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error)
        formRef.current?.setErrors(errors)
        return
      }
      setFeedbackModalIsOpen(true)
      setFeedbackStatus('warning')
    } finally {
      setIsSendingMessage(false)
    }
  }, [])

  return (
    <>
      <SEO title="Contato" image="/logo/light.svg" description={description} />
      <FeedbackModal
        content={feedbackModalContent}
        isOpen={feedbackModalIsOpen}
        setIsOpen={setFeedbackModalIsOpen}
        status={feedbackStatus}
      />

      <Container>
        <PageHeader
          title="Envie um e-mail para gente"
          subtitle="Vamos ficar felizes em ajudar em seu projeto, ideia e / ou empresa"
        />
        <FormStyled ref={formRef} onSubmit={handleSubmit}>
          <InputsContainer>
            <Input name="name" placeholder="Seu nome" />
            <Input name="email" placeholder="Seu email" />
            <Input name="phone" placeholder="Seu telefone" />
            <Textarea name="answer" placeholder="Detalhe sua ideia aqui" />
            <p>
              *Após o recebimento da sua mensagem no nosso e-mail, entraremos em
              contato
            </p>
          </InputsContainer>
          <Button text="Enviar" isLoading={isSendingMessage} />
        </FormStyled>
      </Container>
    </>
  )
}

export default Contact
