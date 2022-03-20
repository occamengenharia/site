import SuccessIcon from './assets/SuccessIcon.svg'
import WarningIcon from './assets/WarningIcon.svg'
import { FeedbackModalProps } from './types'

import ModalWrapper from '@/components/ModalWrapper'
import Button from '@/components/Button'

import {
  Container,
  ButtonsContainer,
  IconContainer,
  TextContainer
} from './styles'

const FeedbackModal: React.FC<FeedbackModalProps> = ({
  status,
  content,
  isOpen,
  setIsOpen
}) => {
  const handleCloseModal = () => setIsOpen(false)

  return (
    <ModalWrapper open={isOpen} onClose={handleCloseModal}>
      <Container>
        <IconContainer>
          {status === 'success' && <SuccessIcon />}
          {status === 'warning' && <WarningIcon />}
        </IconContainer>
        <TextContainer>
          <h1>{content.title}</h1>
          <h2>{content.message}</h2>
        </TextContainer>
        <ButtonsContainer>
          {content.secondaryButtonText && content.onSecondaryButtonClick && (
            <Button
              color={status === 'success' ? 'primary' : 'warning'}
              text={content.secondaryButtonText}
              onClick={content.onSecondaryButtonClick}
              variant="outlined"
              size="small"
            />
          )}
          <Button
            color={status === 'success' ? 'primary' : 'warning'}
            text={content.primaryButtonText}
            onClick={content.onPrimaryButtonClick}
            variant="contained"
            size="small"
          />
        </ButtonsContainer>
      </Container>
    </ModalWrapper>
  )
}

export default FeedbackModal
