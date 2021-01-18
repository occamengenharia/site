import { IconBaseProps } from 'react-icons'
import { Main } from './styles'
import { ButtonHTMLAttributes } from 'react'
import LinkNext, { LinkProps } from 'next/link'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  icon?: React.ComponentType<IconBaseProps>
}

/**
 *
 * @param icon exemple: icon={<FaIconExemple/>}
 * @param children recept the button text
 */
const Button: React.FC<Props> = ({ icon: Icon, text, children }) => {
  return (
    <Main>
      {Icon && <Icon />}
      <span>{text}</span>
      {children}
    </Main>
  )
}

export default Button
