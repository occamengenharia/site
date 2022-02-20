import { light } from '@/styles/theme'
import { IParticlesParams } from 'react-tsparticles'

export const particlesParams: IParticlesParams = {
  id: 'particles',
  options: {
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
  }
}
