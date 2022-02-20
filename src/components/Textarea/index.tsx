/* eslint-disable @typescript-eslint/ban-types */
// eslint-disable-next-line no-use-before-define
import React, { useRef, useEffect, useState, useCallback } from 'react'
import { useField } from '@unform/core'

import { TextareaContainer, Placeholder, ErrorMessage } from './styles'
import { TextareaProps } from './types'

const Textarea: React.FC<TextareaProps> = ({ name, placeholder, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const { fieldName, defaultValue, error, registerField } = useField(name)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!textAreaRef.current?.value)
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textAreaRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <TextareaContainer
      isErrored={!!error}
      isFocused={isFocused}
      isFilled={isFilled}
    >
      <textarea
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={textAreaRef}
        defaultValue={defaultValue}
        id={fieldName}
        placeholder=""
        {...rest}
      />
      <Placeholder>{placeholder}</Placeholder>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </TextareaContainer>
  )
}

export default Textarea
