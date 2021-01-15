/* eslint-disable @typescript-eslint/ban-types */
// eslint-disable-next-line no-use-before-define
import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  TextareaHTMLAttributes
} from 'react'
import { IconBaseProps } from 'react-icons'
import { FiAlertCircle } from 'react-icons/fi'
import { useField } from '@unform/core'

import { Container, Error } from './styles'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  containerStyle?: object
  icon?: React.ComponentType<IconBaseProps>
}

const Textarea: React.FC<TextareaProps> = ({
  name,
  icon: Icon,
  containerStyle = {},
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isField, setIsField] = useState(false)

  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const { fieldName, defaultValue, error, registerField } = useField(name)

  const handleTextareaFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleTextareaBlur = useCallback(() => {
    setIsFocused(false)

    setIsField(!!textareaRef.current?.value)
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Container
      style={containerStyle}
      isErrored={!!error}
      isField={isField}
      isFocused={isFocused}
    >
      {Icon && <Icon size={20} />}
      <textarea
        onFocus={handleTextareaFocus}
        onBlur={handleTextareaBlur}
        defaultValue={defaultValue}
        ref={textareaRef}
        {...rest}
      />
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  )
}

export default Textarea
