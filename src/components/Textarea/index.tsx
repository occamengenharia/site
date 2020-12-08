import { TextareaHTMLAttributes, useEffect, useRef } from 'react'
import { BodyTextarea } from './styles'

import { useField } from '@unform/core'
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  label?: string
  subLabel?: string
  pathSubLabel?: string
}
const Textarea: React.FC<TextareaProps> = ({
  name,
  label,
  subLabel,
  pathSubLabel,
  ...rest
}) => {
  const textareRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <BodyTextarea
      id={fieldName}
      ref={textareRef}
      defaultValue={defaultValue}
      {...rest}
    />
  )
}

export default Textarea
