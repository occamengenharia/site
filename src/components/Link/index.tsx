import { IconBaseProps } from 'react-icons'
import { Main } from './styles'
import { LinkProps } from 'next/link'

interface Props extends LinkProps {
  icon?: React.ComponentType<IconBaseProps>
  href: string
}
/**
 *
 * @param icon exemple: icon={<FaIconExemple/>}
 * @param children recept the button text
 */
const Link: React.FC<Props> = ({ icon: Icon, children, href }) => {
  return (
    <Main href={href}>
      <a id="link">
        <span>{Icon && <Icon />}</span>
        {children}
      </a>
    </Main>
  )
}

export default Link
