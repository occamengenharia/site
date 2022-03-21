import 'react-responsive-modal/styles.css'
import Modal, { ModalProps } from 'react-responsive-modal'

import { CloseButton } from './closeButton.styles'
import { modalStyles } from './modal.styles'

type ModalWrapperProps = ModalProps & {
  showCloseButton?: boolean
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  onClose,
  open,
  showCloseButton = true,
  children,
  ...rest
}) => {
  return (
    <Modal
      onClose={onClose}
      open={open}
      showCloseIcon={showCloseButton}
      closeIcon={showCloseButton && <CloseButton />}
      styles={modalStyles.styles}
      center
      {...rest}
    >
      {children}
    </Modal>
  )
}

export default ModalWrapper
