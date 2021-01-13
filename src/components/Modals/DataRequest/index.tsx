import { Form } from '@unform/web'
import * as Yup from 'yup'
import { useState } from 'react'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'

import { ModalContainer, Close, Check, Link } from './styles'

import { FiSend } from 'react-icons/fi'

import Button from '@/components/Button'
import Input from '@/components/Input'

interface DataRequestProps {
  isOpened: boolean
}

const DataRequest: React.FC<DataRequestProps> = ({ isOpened }) => {
  const [openDataRequest, setOpenDataRequest] = useState<boolean>(isOpened)
  const [openSuccess, setOpenSuccess] = useState<boolean>(false)

  function handleCloseModal() {
    setOpenDataRequest(false)
    setOpenSuccess(false)
  }

  function handleNextModal() {
    setOpenDataRequest(false)
    setOpenSuccess(true)
  }

  function handlePreviousModal() {
    setOpenDataRequest(true)
    setOpenSuccess(false)
  }

  async function handleSubmit(data) {
    try {
      const schemas = Yup.object().shape({
        email: Yup.string().email().required()
      })

      await schemas.validate(data, { abortEarly: false })

      handleNextModal()
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        console.log(err)
      }
    }
  }

  return (
    <>
      <Modal
        open={openDataRequest}
        onClose={handleCloseModal}
        center
        showCloseIcon={false}
        styles={{ modal: { borderRadius: 8 } }}
      >
        <Close onClick={handleCloseModal} />
        <ModalContainer>
          <p>Requisição de dados</p>
          <span>
            Enviaremos um e-mail com todos os seus dados relacionados ao
            processo seletivo
          </span>
          <Form onSubmit={handleSubmit}>
            <Input name="email" placeholder="Informe seu email" />
            <Button type="submit" text="Enviar" icon={FiSend} />
          </Form>
        </ModalContainer>
      </Modal>
      <Modal
        open={openSuccess}
        onClose={handleCloseModal}
        center
        showCloseIcon={false}
        styles={{ modal: { borderRadius: 8 } }}
      >
        <Close onClick={handleCloseModal} />
        <ModalContainer>
          <Check />
          <p>Verifique seu email</p>
          <Link onClick={handlePreviousModal}>
            Não recebeu o e-mail? tente novamente
          </Link>
        </ModalContainer>
      </Modal>
    </>
  )
}
export default DataRequest
