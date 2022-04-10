import { useRef, useState, useMemo } from 'react'
import { FormHandles } from '@unform/core'

import { submitForm, ContactFormData } from './utils/submitForm'

import { Container, FormStyled, InputsContainer } from '@/styles/pages/Contact'
import SEO from '@/components/SEO'
import Input from '@/components/Input'
import Textarea from '@/components/Textarea'
import Button from '@/components/Button'
import PageHeader from '@/components/PageHeader'
import FeedbackModal from '@/components/FeedbackModal'
import {
  FeedbackModalContent,
  FeedbackStatus
} from '@/components/FeedbackModal/types'
import { Base } from '@/containers/base'

const description =
  'Envie um e-mail para gente, vamos ficar felizes em ajudar em seu projeto, ideia e / ou empresa - OCCAM Engenharia empresa júnior de engenharia de computação'

const Contact: React.FC = () => {
  const [feedbackModalIsOpen, setFeedbackModalIsOpen] = useState(false)
  const [feedbackStatus, setFeedbackStatus] = useState<FeedbackStatus>(
    'success'
  )
  const [isSendingMessage, setIsSendingMessage] = useState(false)

  const formRef = useRef<FormHandles>(null)

  const handleSubmit = async (data: ContactFormData): Promise<void> => {
    setIsSendingMessage(true)
    const response = await submitForm(data, formRef)
    if (response.status !== 'incomplete') {
      setFeedbackStatus(response.status)
      setFeedbackModalIsOpen(true)
    }
    setIsSendingMessage(false)
  }

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
      onPrimaryButtonClick: () => setFeedbackModalIsOpen(false)
    }
  }, [feedbackStatus])

  return (
    <>
      <SEO title="Contato" image="/logo/light.svg" description={description} />
      <FeedbackModal
        content={feedbackModalContent}
        isOpen={feedbackModalIsOpen}
        setIsOpen={setFeedbackModalIsOpen}
        status={feedbackStatus}
      />
      <Base>
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
              <Textarea name="answer" placeholder="Escreva sua mensagem aqui" />
              <p>
                *Após o recebimento da sua mensagem no nosso e-mail, entraremos
                em contato
              </p>
            </InputsContainer>
            <Button text="Enviar" isLoading={isSendingMessage} />
          </FormStyled>
        </Container>
      </Base>
    </>
  )
}

export default Contact
