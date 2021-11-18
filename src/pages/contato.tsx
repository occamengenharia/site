import { useCallback, useRef, useState } from 'react'
import * as Yup from 'yup'
import { FaMailBulk } from 'react-icons/fa'

import { FormHandles } from '@unform/core'
import { MdNearMe } from 'react-icons/md'

import { Container, FormStyled } from '@/styles/pages/Contact'
import SEO from '@/components/SEO'
import Input from '@/components/Input'
import Textarea from '@/components/Textarea'
import getValidationErrors from '@/utils/getValidationErros'
import Button from '@/components/Button'
import ErrorModal from '@/components/Modals/ErrorModal'
import SuccessModal from '@/components/Modals/SuccessModal'
import axios from 'axios'

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
      <Container>
        <SEO
          title="Entre em contato"
          image="/logo/light.svg"
          description={description}
        />
        <ErrorModal
          title="Ocorreu um erro"
          subtitle="Tente novamente mais tarde"
          isOpened={isOpenError}
          setOpen={setIsOpenError}
        />
        <SuccessModal
          title="E-mail enviado com sucesso"
          subtitle="Obrigado pelo contato, nossa equipe irá entrar em contato o mais breve possível para ajudar."
          isOpened={isOpenSuccess}
          setOpen={setIsOpenSuccess}
          showCloseIcon={false}
          timer={10000}
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
          <Textarea name="answer" placeholder="Detalhe sua ideia aqui" />
          <Button icon={MdNearMe} text={!loading ? 'Enviar' : 'Enviando'} />
        </FormStyled>
      </Container>
    </>
  )
}

export default Contact
