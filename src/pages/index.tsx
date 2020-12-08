import * as Styles from '@/styles/pages/Home'
import SEO from '@/components/SEO'

const Home: React.FC = () => {
  const description = 'OCCAM Engenharia, Empresa Júnior de Computação UTFPR-PB'
  return (
    <Styles.Page>
      <Styles.Initial>Destaques</Styles.Initial>
      <Styles.Actuation>Area de Atuacao</Styles.Actuation>
      <Styles.Members>Mombros</Styles.Members>
      <Styles.Footer>footer</Styles.Footer>
    </Styles.Page>
  )
}

export default Home
