import { About } from '@/styles/pages/Home'
import { FaCaretRight } from 'react-icons/fa'
import NextLink from 'next/link'
import Link from '@/components/Link'
import Button from '@/components/Button'
import { useRouter } from 'next/router'



export const AboutContainer: React.FC = () => {
  const router = useRouter()

  return (
    <About>
      <div>
        <h4>Quem somos?</h4>
        <p>
          Desde 2012 trabalhando para desenvolver atividades que possam ampliar e
          melhorar a qualidade de vida da comunidade ao seu redor.
        </p>
        <div>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            text="SAIBA MAIS"
            onClick={() => router.push('/sobre-nos')}
            />
          <Button
            variant="outlined"
            size="small"
            color="secondary"
            text="NOSSAS REDES SOCIAIS"
            onClick={() => router.push('/contato')}
            />
         </div>
      </div>
      <aside>
        <img src="/sobre-nos.png" alt="mãos sobre um computador" />
        <div></div>
      </aside>
    </About>
  )
}
