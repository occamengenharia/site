import { Check, Close, SuccessModalContainer, Link } from './styles'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import { Button } from '@/components'

interface SuccessModalProps {
  isOpened: boolean
  setOpen(opened: boolean): void
  showCloseIcon?: boolean
  timer?: number
  title: string
  subtitle: string
  hasBackButton?: boolean
  setOpenPreviousModal?(openPrevious: boolean): void
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpened,
  setOpen,
  showCloseIcon,
  timer,
  hasBackButton,
  setOpenPreviousModal,
  subtitle,
  title
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
      {showCloseIcon && <Close onClick={handleCloseModal} />}
      <SuccessModalContainer>
        <Check />
        <div>
          <p>{title}</p>
          <span>{subtitle}</span>
        </div>
        <Button onClick={handleCloseModal} text='Entendi'></Button>
      </SuccessModalContainer>
    </Modal>
  )
}
export default SuccessModal
