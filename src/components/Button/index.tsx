import { IconBaseProps } from 'react-icons'
import { ButtonHTMLAttributes } from 'react'

import { Main, LoadingContainer } from './styles'
import { ButtonColors, ButtonSizes, ButtonVariants } from './types'
import LoadingIcon from './assets/Loading.svg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  variant?: ButtonVariants
  color?: ButtonColors
  size?: ButtonSizes
  icon?: React.ComponentType<IconBaseProps>
  isLoading?: boolean
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
  isLoading = false,
  ...rest
}) => {
  return (
    <Main variant={variant} color={color} size={size} {...rest}>
      {isLoading ? (
        <LoadingContainer>
          <LoadingIcon />
        </LoadingContainer>
      ) : (
        <>
          {Icon && <Icon />}
          <span>{text}</span>
          {children}
        </>
      )}
    </Main>
  )
}

export default Button
