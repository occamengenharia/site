import { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { BodyInput } from '../Input/styles'
import ReactInputMask, { Props } from 'react-input-mask'
interface InputProps extends Props {
  name: string
  label?: string
  subLabel?: string
  pathSubLabel?: string
  type?: string
}
const InputMask: React.FC<InputProps> = ({
  name,
  label,
  subLabel,
  pathSubLabel,
  ...rest
}) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)
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
    <BodyInput>
      <label htmlFor={name}>{label}</label>
      <ReactInputMask
        ref={inputRef}
        defaultValue={defaultValue}
        type="text"
        id={fieldName}
        {...rest}
      />
      {error && <span>{error}</span>}
    </BodyInput>
  )
}

export default InputMask
