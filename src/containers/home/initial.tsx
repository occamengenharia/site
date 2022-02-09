import { Initial } from '@/styles/pages/Home'
import { Header, HomeCarousel } from '@/components'
import { IBanner } from '@/pages'

interface IInitialContainerProps {
  banners: IBanner[]
}

export const InitialContainer: React.FC<IInitialContainerProps> = ({
  banners
}) => (
  <Initial>
    <Header />
    <main>
      <h1>Soluções Simples, Resultados Inovadores</h1>
      <HomeCarousel banners={banners} />
    </main>
  </Initial>
)
