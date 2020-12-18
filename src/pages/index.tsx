import * as Styles from '@/styles/pages/Home'
import SEO from '@/components/SEO'
import Header from '@/components/Header/Header'
import Member from '@/components/MembersHome/index'

const Home: React.FC = () => {
  const description = 'OCCAM Engenharia, Empresa Júnior de Computação UTFPR-PB'
  return (

    <Styles.Page>
      <Styles.Initial>Destaques
        <Header></Header>
      </Styles.Initial>
      <Styles.Actuation>Area de Atuacao</Styles.Actuation>
      <Styles.Members>
        <div>Nossa Equipe</div>
        <Member></Member>
        <div>Histórico de Membros</div>
      </Styles.Members>
      <Styles.Footer>footer</Styles.Footer>
    </Styles.Page>
  )
}

export default Home
