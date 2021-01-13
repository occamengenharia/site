import { useEffect, useRef, InputHTMLAttributes } from 'react'
import { useField } from '@unform/core'
import { BodyInput } from './styles'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}
const Input: React.FC<InputProps> = ({ name, ...rest }) => {
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
    <>
      <BodyInput
        ref={inputRef}
        defaultValue={defaultValue}
        type="text"
        id={fieldName}
        placeholder="informe o placeholder dev"
        isErrored={!!error}
        {...rest}
      />
    </>
  )
}

export default Input
