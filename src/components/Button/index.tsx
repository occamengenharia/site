import { IconBaseProps } from 'react-icons'
import { Main } from './styles'
import { ButtonHTMLAttributes } from 'react'
import { ButtonColors, ButtonSizes, ButtonVariants } from './types'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  variant?: ButtonVariants
  color?: ButtonColors
  size?: ButtonSizes
  icon?: React.ComponentType<IconBaseProps>
}

/**
 *
 * @param icon exemple: icon={<FaIconExemple/>}
 * @param children recept the button text
 */
const Button: React.FC<ButtonProps> = ({
  icon: Icon,
  text,
  variant = 'contained',
  color = 'primary',
  size = 'large',
  children,
  ...rest
}) => {
  return (
    <Main {...rest}>
      {Icon && <Icon />}
      <span>{text}</span>
      {children}
    </Main>
  )
}

export default Button
