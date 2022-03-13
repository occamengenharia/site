import { useCallback, useRef, useState } from 'react'
import axios from 'axios'
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'

import { Container, FormStyled, InputsContainer } from '@/styles/pages/Contact'
import SEO from '@/components/SEO'
import Input from '@/components/Input'
import Textarea from '@/components/Textarea'
import getValidationErrors from '@/utils/getValidationErros'
import Button from '@/components/Button'
import ErrorModal from '@/components/Modals/ErrorModal'
import SuccessModal from '@/components/Modals/SuccessModal'
import PageHeader from '@/components/PageHeader'

interface IContactFormData {
  name: string
  email: string
  phone: string
  answer: string
}

const description =
  'Entre em contato com a gente - OCCAM Engenharia empresa júnior de engenharia de computação'

const Contact: React.FC = () => {
  const [isOpenSuccess, setIsOpenSuccess] = useState(false)
  const [isOpenError, setIsOpenError] = useState(false)
  const [loading, setLoading] = useState(false)
  const formRef = useRef<FormHandles>(null)

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

      setLoading(true)

      const response = await axios.post('/api/contact', data)

      setLoading(false)

      if (response.status > 399) {
        setIsOpenError(true)
        return
      }

      formRef.current.reset()
      setIsOpenSuccess(true)
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error)
        formRef.current?.setErrors(errors)
        return
      }
      setIsOpenError(true)
    }
  }, [])

  return (
    <>
      <SEO
        title="Entre em contato"
        image="/logo/light.svg"
        description={description}
      />
      <ErrorModal
        title="Não foi possivel enviar a mensagem"
        subtitle="Ocorreu um erro ao tentar enviar a mensagem tente novamente mais tarde"
        isOpened={isOpenError}
        setOpen={setIsOpenError}
      />
      <SuccessModal
        title="Mensagem enviada com sucesso"
        subtitle="Enviamos um e-mail cópia para você. Logo entraremos em contato"
        isOpened={isOpenSuccess}
        setOpen={setIsOpenSuccess}
        showCloseIcon={false}
        timer={10000}
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
              *Após o recebimento da sua mensagem no nosso e-mail entraremos em
              contato
            </p>
          </InputsContainer>
          <Button text={!loading ? 'Enviar' : 'Enviando'} />
        </FormStyled>
      </Container>
    </>
  )
}

export default Contact
