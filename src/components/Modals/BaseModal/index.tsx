import { useState } from 'react'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import { ModalContainer, Close } from './styles'

interface ModalProps {
  open: boolean
  timer?: number
  showCloseBtn?: boolean
}

const BaseModal: React.FC<ModalProps> = ({
  open,
  timer,
  showCloseBtn,
  children
}) => {
  const [isOpened, setIsOpened] = useState(open)

  function handleCloseModal() {
    setIsOpened(false)
  }

  if (timer) {
    setTimeout(() => {
      handleCloseModal()
    }, timer)
  }

  return (
    <Modal
      open={isOpened}
      onClose={handleCloseModal}
      center
      showCloseIcon={false}
      styles={{ modal: { borderRadius: 8 } }}
    >
      {showCloseBtn && <Close onClick={handleCloseModal} />}
      <ModalContainer>{children}</ModalContainer>
    </Modal>
  )
}
export default BaseModal
