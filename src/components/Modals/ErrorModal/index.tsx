import { useState } from 'react'
import 'react-responsive-modal/styles.css'
import Modal from 'react-responsive-modal'
import { ModalContainer, Close, Cross } from './styles'

interface ErrorModalProps {
  isOpened: boolean
}

const ErrorModal: React.FC<ErrorModalProps> = ({ isOpened }) => {
  const [openModal, setOpenModal] = useState<boolean>(isOpened)

  function handleCloseModal() {
    setOpenModal(false)
  }

  setTimeout(() => {
    setOpenModal(false)
  }, 3000)

  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      center
      showCloseIcon={false}
      styles={{ modal: { borderRadius: 8 } }}
    >
      <Close onClick={handleCloseModal} />
      <ModalContainer>
        <Cross />
        <div>
          <p>Verifique seu email</p>
          <span>Tente novamente mais tarde</span>
        </div>
      </ModalContainer>
    </Modal>
  )
}

export default ErrorModal
