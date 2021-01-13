import { useEffect, useRef, InputHTMLAttributes } from 'react'
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
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])
  return (
    <Container>
      <BodyInput
        ref={inputRef}
        defaultValue={defaultValue}
        type="file"
        id={fieldName}
        placeholder="informe o placeholder dev"
        {...rest}
      />
      <div>
        <Input name="a" placeholder={placeholder} />
      </div>
    </Container>
  )
}

export default FileInput
