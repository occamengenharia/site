import * as Styles from '@/styles/pages/Home'
import SEO from '@/components/SEO'
import Header from '@/components/Header/Header'

const Home: React.FC = () => {
  const description = 'OCCAM Engenharia, Empresa Júnior de Computação UTFPR-PB'
  return (

    <Styles.Page>
      <Styles.Initial>Destaques</Styles.Initial>
      <Styles.Actuation>Area de Atuacao</Styles.Actuation>
      <Styles.Members>Membros</Styles.Members>
      <Styles.Footer>footer</Styles.Footer>
    </Styles.Page>
  )
}

export default Home
