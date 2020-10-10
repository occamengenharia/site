import { Container } from '@/styles/pages/Home'
import SEO from '@/components/SEO'

const Home: React.FC = () => {
  return (
    <Container>
      <SEO title="HOME" image="/banner.png" />

      <h1>Next Starter structure</h1>
    </Container>
  )
}

export default Home
