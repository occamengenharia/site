import { Message } from './styles'

interface ErrorMessageProps {
  message: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <Message>{message}</Message>
}

export default ErrorMessage
