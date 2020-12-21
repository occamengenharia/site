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
        <span>{title}</span> <p>{isOpen ? 'x' : '+'}</p>
      </aside>

      {links.map(link =>
        link.external ? (
          <a key={link.url} href={link.url}>
            {link.name}
          </a>
        ) : (
          <Link key={link.url} href={link.url}>
            <a>{link.name}</a>
          </Link>
        )
      )}
    </Container>
  )
}

export default SectionLinks
