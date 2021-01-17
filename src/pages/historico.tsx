import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'
import Card from '@/components/MemberCard/index'
import { Page } from '@/components/MemberCard/styles'
import YearBar from '@/components/YearBar/index'

const Historico: React.FC = () => {
  return (
    <>
      <Header />
      <Page>
        <h2>Historico de Membros</h2>
        <YearBar></YearBar>
        <Card />
      </Page>
      <Footer />
    </>
  )
}

export default Historico
