import { useState } from 'react'
import 'react-responsive-modal/styles.css'
import Modal from 'react-responsive-modal'
import { ModalContainer, Close, Cross } from './styles'

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

  setTimeout(() => {
    setOpen(false)
  }, 3000)

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
      </ModalContainer>
    </Modal>
  )
}

export default ErrorModal
