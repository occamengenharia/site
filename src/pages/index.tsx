import * as Styles from '@/styles/pages/Home'
import Link from '@/components/Link'
import SEO from '@/components/SEO'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
const Home: React.FC = () => {
  const description = 'OCCAM Engenharia, Empresa Júnior de Computação UTFPR-PB'
  return (
    <Styles.Page>
      <Styles.Initial>Destaques</Styles.Initial>
      <Styles.Actuation>
        <main>
          <h3>Áreas de Atuação</h3>
          <section>
            <img
              src="Smartphone.svg"
              alt="Imagem de uma mão segurando um telefone"
            />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown{' '}
            </p>
          </section>
          <section>
            <img
              src="Computador.svg"
              alt="Imagem de um monitor e um tablet representando desenvolvimento web"
            />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown{' '}
            </p>
          </section>
          <section>
            <img
              src="/Engrenagem.svg"
              alt="Imagem de uma engrenagem com um botão de reproduzir no centro"
            />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown{' '}
            </p>
          </section>

          <Link icon={BsFillQuestionCircleFill} href="" text="Saiba mais" />
        </main>
      </Styles.Actuation>
      <Styles.Members>Mombros</Styles.Members>
      <Styles.Footer>footer</Styles.Footer>
    </Styles.Page>
  )
}

export default Home
