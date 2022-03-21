import {
  Initial,
  InitialContent,
  WelcomeMessage,
  StyledParticles
} from '@/styles/pages/Home'
import { Header } from '@/components'
import Button from '@/components/Button'
import { useRouter } from 'next/router'
import { particlesParams } from './particles.config'

export const InitialContainer: React.FC = () => {
  const router = useRouter()

  return (
    <Initial>
      <Header />
      <InitialContent>
        <WelcomeMessage>
          <p className="welcome">Bem vindo(a)</p>
          <h1>Soluções Simples, Resultados Inovadores</h1>
          <p className="description">
            Conheça nossas soluções em aplicações web e mobile
          </p>
          <Button
            text="SOLICITE UM ORÇAMENTO AGORA"
            onClick={() => router.push('/contato')}
          />
        </WelcomeMessage>
        <StyledParticles {...particlesParams} />
      </InitialContent>
    </Initial>
  )
}
