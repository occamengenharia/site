import {
  useEffect,
  useRef,
  InputHTMLAttributes,
  useState,
  useCallback
} from 'react'
import { useField } from '@unform/core'
import { BodyInput, Container, Error, PlaceHolder } from './styles'
import { FiAlertCircle } from 'react-icons/fi'
interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  placeholder: string
}
const FileInput: React.FC<FileInputProps> = ({
  name,
  placeholder,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isField, setIsField] = useState(false)
  const [newPlaceholder, setNewPlaceholder] = useState<string>(placeholder)

  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
      clearValue(ref: HTMLInputElement) {
        ref.value = ''
      }
    })
  }, [fieldName, registerField])

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsField(!!inputRef.current?.value)
  }, [])

  function handleUserSendFile(event) {
    setNewPlaceholder(event.target.value)
  }

  return (
    <Container isErrored={!!error} isField={isField} isFocused={isFocused}>
      <BodyInput
        ref={inputRef}
        defaultValue={defaultValue}
        type="file"
        id={fieldName}
        placeholder="informe o placeholder dev"
        onChange={e => handleUserSendFile(e)}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        {...rest}
      />
      <PlaceHolder>
        <label htmlFor={fieldName}>{newPlaceholder}</label>
      </PlaceHolder>
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#E45B5B" size={20} />
        </Error>
      )}
    </Container>
  )
}

export default FileInput
