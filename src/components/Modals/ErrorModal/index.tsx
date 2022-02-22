import { useState } from 'react'
import 'react-responsive-modal/styles.css'
import Modal from 'react-responsive-modal'
import { ModalContainer, Close, Cross } from './styles'
import Button from '@/components/Button'

interface ErrorModalProps {
  isOpened: boolean
  setOpen(opened: boolean): void
  title?: string
  subtitle?: string
}

const ErrorModal: React.FC<ErrorModalProps> = ({
  isOpened,
  setOpen,
  title,
  subtitle
}) => {
  function handleCloseModal() {
    setOpen(false)
  }



  return (
    <Modal
      open={isOpened}
      onClose={handleCloseModal}
      center
      showCloseIcon={false}
      styles={{ modal: { borderRadius: 8 } }}
    >
      <Close onClick={handleCloseModal} />
      <ModalContainer>
        <Cross />
        <div>
          <p>{title}</p>
          <span>{subtitle}</span>
        </div>
        <Button onClick={handleCloseModal} text={'Voltar'}></Button>
      </ModalContainer>
    </Modal>
  )
}

export default ErrorModal
