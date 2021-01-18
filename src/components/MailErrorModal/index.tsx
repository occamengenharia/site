import { useCallback } from 'react'
import { ModalContainer, Timer } from './styles'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'

import { MdClose } from 'react-icons/md'

interface IModalProps {
  isOpen: boolean
  // eslint-disable-next-line @typescript-eslint/ban-types
  setIsOpen: Function
}

const MailErrorModal: React.FC<IModalProps> = ({ isOpen, setIsOpen }) => {
  const styles = {
    modal: {
      borderRadius: 8,
      padding: 0
    }
  }

  const handleCloseModal = useCallback(() => {
    setIsOpen((open: boolean) => !open)
  }, [])

  return (
    <Modal
      open={isOpen}
      onClose={handleCloseModal}
      center
      styles={styles}
      showCloseIcon={false}
    >
      <Timer />
      <ModalContainer>
        <MdClose onClick={handleCloseModal} />
        <div>
          <div>
            <strong>Erro ao enviar e-mail!</strong>
            <p>Tente novamente.</p>
            <button onClick={handleCloseModal}>Fechar</button>
          </div>
        </div>
      </ModalContainer>
    </Modal>
  )
}

export default MailErrorModal
