import {
  Container,
  InternalLinks,
  SectionImage,
  SectionLinks,
  SocialLinks,
  SocialLinksIcons
} from './styles'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'
const Footer: React.FC = () => {
  return (
    <Container>
      <InternalLinks>
        <SectionImage>
          <img src="/occam.png" alt="OCCAM Engenharia" />
          <span>Empresa júnior de Engenharia de computação. ENDEREÇO</span>
        </SectionImage>

        <SectionLinks>
          <aside>
            <span> Empresa</span> <p>+</p>
          </aside>

          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/">
            <a>Sobre nós</a>
          </Link>
          <Link href="/">
            <a>Nossa equipe </a>
          </Link>
          <Link href="/">
            <a>Nossos serviços</a>
          </Link>
          <Link href="/">
            <a>Projetos</a>
          </Link>
          <Link href="/">
            <a>Processo seletivo</a>
          </Link>
        </SectionLinks>

        <SectionLinks>
          <aside>
            <span>Contato</span>
            <p>+</p>
          </aside>
          <Link href="/">
            <a>occamengenharia@gmail.com</a>
          </Link>
          <Link href="/">
            <a>46 99999-9999</a>
          </Link>
        </SectionLinks>

        <SectionLinks>
          <aside>
            <span>Legal</span>
            <p>+</p>
          </aside>

          <Link href="/">
            <a>Política de privacidade</a>
          </Link>
          <Link href="/">
            <a>Termo de serviço</a>
          </Link>
        </SectionLinks>
      </InternalLinks>

      <SocialLinks>
        <span>Copyright 2020</span>

        <SocialLinksIcons>
          <a href="/">
            <FaInstagram />
          </a>
          <a href="/">
            <FaGithub />
          </a>
          <a href="/">
            <FaLinkedin />
          </a>
        </SocialLinksIcons>
      </SocialLinks>
    </Container>
  )
}

export default Footer
