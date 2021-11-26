import { IconBaseProps } from 'react-icons'
import { Main } from './styles'
import LinkNext, { LinkProps } from 'next/link'

interface Props extends LinkProps {
  href: string
  text: string
  icon?: React.ComponentType<IconBaseProps>
}
/**
 *
 * @param icon exemple: icon={<FaIconExemple/>}
 * @param children recept the button text
 */
const Link: React.FC<Props> = ({ icon: Icon, text, children, href }) => {
  const isExternal = href.match(/http/gi)

  if (!isExternal) {
    return (
      <LinkNext href={href}>
        <Main>
          {Icon && <Icon />}
          <span>{text}</span>
          {children}
        </Main>
      </LinkNext>
    )
  }
  return (
    <Main>
      <a href={href} target="blank">
        {Icon && <Icon />}
        <span>{text}</span>
        {children}
      </a>
    </Main>
  )
}

export default Link
