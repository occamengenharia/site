import { useState } from 'react'
import { Check } from './styles'
import BaseModal from '../BaseModal'

interface SuccessProps {
  isOpened: boolean
  title: string
  subtitle?: string
  link?: string
  timer?: number
}

const Success: React.FC<SuccessProps> = ({
  isOpened,
  title,
  subtitle,
  link,
  timer
}) => {
  return (
    <BaseModal showCloseBtn={!timer} timer={timer} open={isOpened}>
      <Check />
      <p>{title}</p>
      <span>{link || subtitle}</span>
    </BaseModal>
  )
}
export default Success
