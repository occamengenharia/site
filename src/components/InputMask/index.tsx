import { useCallback, useEffect, useRef, useState } from 'react'
import { useField } from '@unform/core'
import { Container, Error } from '../Input/styles'
import ReactInputMask, { Props } from 'react-input-mask'
import { FiAlertCircle } from 'react-icons/fi'

interface InputProps extends Props {
  name: string
  label?: string
  subLabel?: string
  pathSubLabel?: string
  type?: string
}
const InputMask: React.FC<InputProps> = ({ name, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isField, setIsField] = useState(false)
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)
  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsField(!!inputRef.current?.value)
  }, [])
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue(value)
      },
      clearValue(ref: any) {
        ref.setInputValue('')
      }
    })
  }, [fieldName, registerField])
  return (
    <Container isErrored={!!error} isFocused={isFocused} isField={isField}>
      <ReactInputMask
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        defaultValue={defaultValue}
        type="text"
        id={fieldName}
        {...rest}
      />
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#E45B5B" size={20} />
        </Error>
      )}
    </Container>
  )
}

export default InputMask
