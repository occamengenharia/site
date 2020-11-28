import { Container } from '@/styles/pages/Home'
import SEO from '@/components/SEO'
import { useTheme } from '@/hooks/theme'

const Home: React.FC = () => {
  const { toggleTheme, theme, componentMounted } = useTheme()

  if (!componentMounted) {
    return <div />
  }

  const description = 'OCCAM Engenharia, Empresa Júnior de Computação UTFPR-PB'
  return (
    <Container>
      <SEO title="HOME" image="/banner.png" description={description} />

      <h1>Next Starter structure</h1>
      <button onClick={toggleTheme}>
        {theme === 'dark' ? 'light' : 'dark'}
      </button>
    </Container>
  )
}

export default Home
