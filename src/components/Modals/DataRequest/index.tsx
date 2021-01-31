import { Form } from '@unform/web'
import axios from 'axios'
import * as Yup from 'yup'
import { useRef, useState } from 'react'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'

import { ModalContainer, Close } from './styles'

import { FiSend } from 'react-icons/fi'

import Button from '@/components/Button'
import Input from '@/components/Input'
import SuccessModal from '@/components/Modals/SuccessModal'
import ErrorModal from '@/components/Modals/ErrorModal'

import getValidationErrors from '@/utils/getValidationErros'

interface DataRequestProps {
  isOpened: boolean
  setIsOpen(isOpened: boolean): void
}

const DataRequest: React.FC<DataRequestProps> = ({ isOpened, setIsOpen }) => {
  const formRef = useRef(null)

  const [openSuccess, setOpenSuccess] = useState<boolean>(false)
  const [openError, setOpenError] = useState<boolean>(false)

  function handleCloseModal() {
    setIsOpen(false)
    setOpenSuccess(false)
  }

  function handleNextModal() {
    setIsOpen(false)
    setOpenSuccess(true)
  }

  async function handleSubmit(data) {
    try {
      const schemas = Yup.object().shape({
        email: Yup.string()
          .email('Insira um email válido')
          .required('Insira um email válido')
      })

      await schemas.validate(data, { abortEarly: false })
      await axios.post('/api/request', {
        email: data.email
      })

      handleNextModal()
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)

        formRef.current?.setErrors(errors)
      } else {
        setIsOpen(false)
        setOpenError(true)
      }
    }
  }

  return (
    <>
      {!openSuccess && (
        <Modal
          open={isOpened}
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
            <Form onSubmit={handleSubmit} ref={formRef}>
              <Input name="email" placeholder="Informe seu email" />
              <Button type="submit" text="Enviar" icon={FiSend} />
            </Form>
          </ModalContainer>
        </Modal>
      )}
      <SuccessModal
        title="Verifique seu email"
        subtitle="Não recebeu o e-mail? tente novamente"
        hasBackButton
        showCloseIcon
        isOpened={openSuccess}
        setOpen={setOpenSuccess}
        setOpenPreviousModal={setIsOpen}
      />
      <ErrorModal
        isOpened={openError}
        setOpen={setOpenError}
        title="Ocorreu um erro"
        subtitle="Tente novamente"
      />
    </>
  )
}
export default DataRequest
