import { useState } from 'react'

import * as S from './styles'

export interface ITooltipProps {
  delay?: number
  direction?: 'bottom' | 'top' | 'left' | 'right'
  content: string
  className?: string
}

export const Tooltip: React.FC<ITooltipProps> = ({
  delay = 400,
  direction = 'bottom',
  content,
  children,
  className
}) => {
  let timeout: ReturnType<typeof setTimeout>
  const [active, setActive] = useState(false)

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true)
    }, delay)
  }

  const hideTip = () => {
    clearInterval(timeout)
    setActive(false)
  }
  return (
    <S.Container
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
      className={className}
    >
      {children}
      {active && <S.Tip className={`${direction}`}>{content}</S.Tip>}
    </S.Container>
  )
}
