import { useRouter } from 'next/router'
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

const MailSuccessModal: React.FC<IModalProps> = ({ isOpen, setIsOpen }) => {
  const router = useRouter()

  const styles = {
    modal: {
      borderRadius: 8,
      padding: 0
    }
  }

  const handleCloseModal = useCallback(() => {
    setIsOpen((open: boolean) => !open)
    router.push('/')
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
            <strong>Email enviado com sucesso!</strong>
            <p>Agradecemos pelo contato, em breve daramos um retorno!</p>
            <button onClick={handleCloseModal}>Fechar</button>
          </div>
        </div>
      </ModalContainer>
    </Modal>
  )
}

export default MailSuccessModal
