import { useCallback, useRef, useState } from 'react'
import * as Yup from 'yup'

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

interface IContactFormData {
  name: string
  email: string
  phone: string
  description: string
}

const description = 'Rei das Chaves e Carimbos'

const Contact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
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

      setIsOpen(true)
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error)

        formRef.current?.setErrors(errors)
      }
    }
  }, [])

  return (
    <Container>
      <MailSuccessModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <MailErrorModal isOpen={isOpenError} setIsOpen={setIsOpenError} />
      <SEO
        title="Contato"
        image="/LOGO VETOR (BLACK-BG).svg"
        description={description}
      />

      <FormStyled ref={formRef} onSubmit={handleSubmit}>
        <h1>ENTRE EM CONTATO COM A GENTE</h1>

        <Input icon={MdSupervisorAccount} name="name" placeholder="nome" />
        <Input icon={MdMail} name="email" placeholder="e-mail" />
        <Input icon={MdPhoneIphone} name="phone" placeholder="telefone" />
        <Textarea
          icon={MdDescription}
          name="description"
          placeholder="descrição do serviço"
        />

        <button type="submit">
          {loading ? (
            'Carregando...'
          ) : (
            <>
              ENVIAR <MdNearMe />
            </>
          )}
        </button>
      </FormStyled>
    </Container>
  )
}

export default Contact
