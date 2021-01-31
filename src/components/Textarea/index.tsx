/* eslint-disable @typescript-eslint/ban-types */
// eslint-disable-next-line no-use-before-define
import React, {
  useRef,
  useEffect,
  TextareaHTMLAttributes,
  useState,
  useCallback
} from 'react'
import { FiAlertCircle } from 'react-icons/fi'
import { useField } from '@unform/core'

import { Container, Error } from './styles'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
}

const Textarea: React.FC<TextareaProps> = ({ name, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isField, setIsField] = useState(false)

  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const { fieldName, defaultValue, error, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsField(!!textareaRef.current?.value)
  }, [])

  return (
    <Container isErrored={!!error} isFocused={isFocused} isField={isField}>
      <textarea
        id={fieldName}
        ref={textareaRef}
        defaultValue={defaultValue}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
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

export default Textarea
