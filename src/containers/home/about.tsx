import { About } from '@/styles/pages/Home'
import { FaCaretRight } from 'react-icons/fa'
import NextLink from 'next/link'

export const AboutContainer: React.FC = () => (
  <About>
    <div>
      <h4>Sobre Nós</h4>
      <span>
        Desde 2012 trabalhando para desenvolver atividades que possam ampliar e
        melhorar a qualidade de vida da comunidade ao seu redor.
      </span>

      <NextLink href="/sobre-nos">
        <a>
          Saiba Mais
          <FaCaretRight />
        </a>
      </NextLink>
    </div>
    <aside>
      <img src="/empresa.svg" alt="mãos sobre um computador" />
      <div></div>
    </aside>
  </About>
)
