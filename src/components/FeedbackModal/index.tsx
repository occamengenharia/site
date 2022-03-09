import React, { useState } from 'react'

import SuccessIcon from './assets/SuccessIcon.svg'
import WarningIcon from './assets/WarningIcon.svg'

import ModalWrapper from '@/components/ModalWrapper'
import Button from '@/components/Button'

import {
  Container,
  ButtonsContainer,
  IconContainer,
  TextContainer
} from './styles'

interface FeedbackModalProps {
  status: 'success' | 'warning'
  title: string
  message: string
  primaryButtonText: string
  onPrimaryButtonClick: () => void
  secondaryButtonText?: string
  onSecondaryButtonClick?: () => void
  isOpen: boolean
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({
  message,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  primaryButtonText,
  secondaryButtonText,
  status,
  title,
  isOpen
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(isOpen)

  return (
    <ModalWrapper open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
      <Container>
        <IconContainer>
          {status === 'success' && <SuccessIcon />}
          {status === 'warning' && <WarningIcon />}
        </IconContainer>
        <TextContainer>
          <h1>{title}</h1>
          <h2>{message}</h2>
        </TextContainer>
        <ButtonsContainer>
          {secondaryButtonText && onSecondaryButtonClick && (
            <Button
              color={status === 'success' ? 'primary' : 'warning'}
              text={secondaryButtonText}
              onClick={onSecondaryButtonClick}
              variant="outlined"
              size="small"
            />
          )}
          <Button
            color={status === 'success' ? 'primary' : 'warning'}
            text={primaryButtonText}
            onClick={onPrimaryButtonClick}
            variant="contained"
            size="small"
          />
        </ButtonsContainer>
      </Container>
    </ModalWrapper>
  )
}

export default FeedbackModal
