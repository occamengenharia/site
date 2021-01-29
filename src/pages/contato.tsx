import { useCallback, useRef, useState } from 'react'
import * as Yup from 'yup'
import { FaMailBulk } from 'react-icons/fa'

import { FormHandles } from '@unform/core'
import {
  MdNearMe,
  MdSupervisorAccount,
  MdMail,
  MdPhoneIphone,
  MdDescription
} from 'react-icons/md'

import { Container, FormStyled } from '@/styles/pages/Contact'
import SEO from '@/components/SEO'
import Input from '@/components/Input'
import Textarea from '@/components/Textarea'
import getValidationErrors from '@/utils/getValidationErros'
import MailSuccessModal from '@/components/MailSuccessModal'
import MailErrorModal from '@/components/MailErrorModal'
import Button from '@/components/Button'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ErrorModal from '@/components/Modals/ErrorModal'
import SuccessModal from '@/components/Modals/SuccessModal'

interface IContactFormData {
  name: string
  email: string
  phone: string
  description: string
}

const description = 'OCCAM Engenharia'

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
        description: Yup.string().required('Descrição é obrigatória')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      setLoading(true)

      const response = await fetch('/api/sendmail', {
        method: 'POST',
        body: JSON.stringify(data)
      })

      setLoading(false)

      if (response.status === 401) {
        setIsOpenError(true)
        return
      }

      setIsOpenSuccess(true)
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error)
        setIsOpenError(true)
        formRef.current?.setErrors(errors)
      }
    }
  }, [])

  return (
    <>
      <Container>
        <ErrorModal
          title="Ocorreu um erro"
          subtitle="Tente novamente mais tarde"
          isOpened={isOpenError}
          setOpen={setIsOpenError}
        />
        <SuccessModal
          title="E-mail enviado com sucesso"
          subtitle="Verifique sua caixa de e-mail, ele já deve estar lá."
          isOpened={isOpenSuccess}
          setOpen={setIsOpenSuccess}
          showCloseIcon={false}
          timer={10000}
        />
        <SEO
          title="Contato"
          image="/LOGO VETOR (BLACK-BG).svg"
          description={description}
        />

        <FormStyled ref={formRef} onSubmit={handleSubmit}>
          <div id="titulo">
            <FaMailBulk id="logo-email" />
            <h3>Envie um e-mail para gente</h3>
          </div>
          <p>Vamos ficar felizes em ajudar o seu projeto, ideia ou empresa</p>
          <Input name="name" placeholder="Seu nome" />
          <Input name="email" placeholder="Seu email" />
          <Input name="phone" placeholder="Seu telefone" />
          <Textarea name="description" placeholder="Detalhe sua ideia aqui" />
          <Button icon={MdNearMe} text="Enviar" />
        </FormStyled>
      </Container>
    </>
  )
}

export default Contact
