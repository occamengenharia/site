export type FeedbackStatus = 'success' | 'warning'

export type FeedbackModalContent = {
  title: string
  message: string
  primaryButtonText: string
  onPrimaryButtonClick: () => void
  secondaryButtonText?: string
  onSecondaryButtonClick?: () => void
}

export interface FeedbackModalProps {
  status: FeedbackStatus
  content: FeedbackModalContent
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
