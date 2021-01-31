import { IconBaseProps } from 'react-icons'
import { Main } from './styles'
import { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  icon?: React.ComponentType<IconBaseProps>
}

/**
 *
 * @param icon exemple: icon={<FaIconExemple/>}
 * @param children recept the button text
 */
const Button: React.FC<Props> = ({ icon: Icon, text, children, ...rest }) => {
  return (
    <Main {...rest}>
      {Icon && <Icon />}
      <span>{text}</span>
      {children}
    </Main>
  )
}

export default Button
