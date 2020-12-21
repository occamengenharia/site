import {
  Page,
  Initial,
  Actuation,
  Members,
  AboutUs,
  SectionFooter,
  Marquee
} from '@/styles/pages/Home'
import { FaCaretRight, FaCaretLeft } from 'react-icons/fa'
import SEO from '@/components/SEO'
import { Footer } from '@/components'

const Home: React.FC = () => {
  const description = 'OCCAM Engenharia, Empresa Júnior de Computação UTFPR-PB'
  return (
    <>
      <SEO title="Home" description={description} image="/occam.png" />
      <Page>
        <Initial>
          <main>
            <h1>Soluções Simples, Resultados Inovadores</h1>
            <div>
              <img src="animacao.gif" alt="logo animada OCCAM" />

              <div>
                <FaCaretLeft />
                <span>O novo site da OCCAM está aqui!</span>
                <FaCaretRight />
              </div>
            </div>
          </main>
        </Initial>
        <Actuation>Area de Atuacao</Actuation>
        <Members>Mombros</Members>
        <SectionFooter id="footer">
          <Marquee>
            <section>
              <img src="occam.png" alt="" />
              <img src="occam.png" alt="" />
              <img src="occam.png" alt="" />
            </section>
          </Marquee>
          <Footer />
        </SectionFooter>
      </Page>
    </>
  )
}

export default Home
