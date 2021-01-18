import { Container } from '@/styles/pages/Links'
import SEO from '@/components/SEO'
import Link from '@/components/Link'
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaShareAltSquare,
  FaFacebookSquare
} from 'react-icons/fa'

const Home: React.FC = () => {
  const description = 'OCCAM Engenharia, Empresa Júnior de Computação UTFPR-PB'
  return (
    <Container>
      <SEO title="HOME" image="/banner.png" description={description} />
      <main>
        <div id="firstText">
          <h3>
            <FaShareAltSquare />
          </h3>
          <h2>Acompanhe a gente em outras plataformas</h2>
        </div>
        <span id="subtext">Alguns links uteis da OCCAM Engenharia</span>
        <div id="links">
          <Link
            icon={FaInstagram}
            href="https://www.instagram.com/occamengenharia/"
            text="Instagram"
          />
          <Link
            icon={FaLinkedin}
            href="https://www.linkedin.com/company/occamengenharia/"
            text="Linkedin"
          />
          <Link
            icon={FaGithub}
            href="https://github.com/occamengenharia"
            text="Github"
          />
          <Link
            icon={FaFacebookSquare}
            href="https://www.facebook.com/occamengenharia"
            text="Facebook"
          />
        </div>
      </main>
    </Container>
  )
}

export default Home
