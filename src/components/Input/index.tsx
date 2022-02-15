/* eslint-disable @typescript-eslint/ban-types */
// eslint-disable-next-line no-use-before-define
import React, { useRef, useEffect, useState, useCallback } from 'react'
import { useField } from '@unform/core'

import { InputContainer } from './styles'
import { InputProps } from './types'

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, error, registerField } = useField(name)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!inputRef.current?.value)
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <InputContainer
      isErrored={!!error}
      isFocused={isFocused}
      isFilled={isFilled}
    >
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        defaultValue={defaultValue}
        id={fieldName}
        {...rest}
      />
    </InputContainer>
  )
}

export default Input
