import { IconBaseProps } from 'react-icons'
import { Main } from './styles'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  variant?: 'contained' | 'outlined'
  color?: 'primary' | 'secondary' | 'warning' | 'disabled'
  size?: 'small' | 'large'
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
