import { useEffect, useRef, InputHTMLAttributes, useState } from 'react'
import { useField } from '@unform/core'
import { BodyInput, Container } from './styles'
import Input from '@/components/Input'
interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  placeholder: string
}
const FileInput: React.FC<FileInputProps> = ({
  name,
  placeholder,
  ...rest
}) => {
  const [newPlaceholder, setNewPlaceholder] = useState<string>(placeholder)

  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  function handleUserSendFile(event) {
    setNewPlaceholder(event.target.value)
  }

  return (
    <Container isErrored={!!error}>
      <BodyInput
        ref={inputRef}
        defaultValue={defaultValue}
        type="file"
        id={fieldName}
        placeholder="informe o placeholder dev"
        onChange={e => handleUserSendFile(e)}
        {...rest}
      />
      <div>
        <label htmlFor={fieldName}>{newPlaceholder}</label>
      </div>
    </Container>
  )
}

export default FileInput
