import { TextareaHTMLAttributes } from 'react'

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
}

export interface TextareaContainerProps {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
}
