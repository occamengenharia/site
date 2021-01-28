import { Container } from './styles'

import Link from 'next/link'
import { useCallback, useState } from 'react'

interface SectionLinksProps {
  data: {
    title: string
    links: {
      name: string
      url: string
      external: boolean
    }[]
  }
}
const SectionLinks: React.FC<SectionLinksProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)

  const { title, links } = data

  const handleOpenLinks = useCallback(() => {
    setIsOpen(open => !open)
  }, [])

  return (
    <Container isOpen={isOpen}>
      <aside onClick={handleOpenLinks}>
        <span>{title}</span> <p>+</p>
      </aside>

      {links.map(link =>
        link.external ? (
          <a key={link.name} href={link.url}>
            {link.name}
          </a>
        ) : (
          <Link key={link.name} href={link.url}>
            <a>{link.name}</a>
          </Link>
        )
      )}
    </Container>
  )
}

export default SectionLinks
