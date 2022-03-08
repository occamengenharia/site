import { About } from '@/styles/pages/Home'
import { FaCaretRight } from 'react-icons/fa'
import NextLink from 'next/link'
import Link from '@/components/Link'

export const AboutContainer: React.FC = () => (
  <About>
    <div>
      <h4>Quem somos?</h4>
      <p>
        Desde 2012 trabalhando para desenvolver atividades que possam ampliar e
        melhorar a qualidade de vida da comunidade ao seu redor.
      </p>
      <Link
        href="/sobre-nos"
        text="SAIBA MAIS"
      />
    </div>
    <aside>
      <img src="/sobre-nos.png" alt="mãos sobre um computador" />
      <div></div>
    </aside>
  </About>
)
