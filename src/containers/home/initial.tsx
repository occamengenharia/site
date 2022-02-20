import {
  Initial,
  InitialContent,
  WelcomeMessage,
  StyledParticles,
  Divider
} from '@/styles/pages/Home'
import { Header } from '@/components'
import Button from '@/components/Button'
import { light } from '@/styles/theme'
import { useRouter } from 'next/router'

export const InitialContainer: React.FC = () => {
  const router = useRouter()

  return (
    <Initial>
      <Header />
      <Divider />
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
        <StyledParticles
          id="particles"
          options={{
            fullScreen: {
              enable: false
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: 'grab'
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 300
                }
              }
            },
            particles: {
              color: {
                value: light.colors.neutral70
              },
              links: {
                color: light.colors.neutral70,
                distance: 150,
                enable: true,
                opacity: 1,
                width: 1
              },
              collisions: {
                enable: true
              },
              move: {
                direction: 'none',
                enable: true,
                outMode: 'bounce',
                random: false,
                speed: 6,
                straight: false
              },
              number: {
                density: {
                  enable: true,
                  area: 800
                },
                value: 80
              }
            },
            detectRetina: true
          }}
        />
      </InitialContent>
    </Initial>
  )
}
