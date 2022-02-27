import { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export interface InputContainerProps {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
}
