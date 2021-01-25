import { useState, useEffect } from 'react'
import { GetStaticProps } from 'next'
import {
  Page,
  Initial,
  Actuation,
  Members,
  About,
  SectionFooter,
  Marquee
} from '@/styles/pages/Home'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import { FaCaretRight, FaCaretLeft } from 'react-icons/fa'

import { Footer } from '@/components'
import SEO from '@/components/SEO'
import Header from '@/components/Header'
import Member from '@/components/MembersHome/index'
import Link from '@/components/Link'
import DataRequest from '@/components/Modals/DataRequest'
import ErrorModal from '@/components/Modals/ErrorModal'
import SuccessModal from '@/components/Modals/SuccessModal'
import SelectiveProcessForm from '@/components/Modals/SelectiveProcessForm'
import api from '@/services/api'

interface IBanners {
  _id: string
  reference_location: string
  published_at: Date
  createdAt: Date
  updatedAt: Date
  __v: number
  photo: {
    _id: string
    name: string
    alternativeText: string
    caption: string
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    provider: string
    width: number
    height: number
    related: string[]
    createdAt: Date
    updatedAt: Date
    __v: number
    id: string
  }
  id: string
}

interface ISerializedPhotos {
  serializedPhotos: string[]
}

const Home: React.FC<ISerializedPhotos> = props => {
  const description = 'OCCAM Engenharia, Empresa Júnior de Computação UTFPR-PB'
  const [banners, setBanners] = useState<string[]>([
    'animacao.gif',
    'banner.png'
  ])
  const [currentImage, setCurrentImage] = useState<string>(banners[0])
  const [currentImagePos, setCurrentImagePos] = useState(0)

  function handleNextImage() {
    if (currentImagePos === banners.length - 1) {
      setCurrentImagePos(0)
      setCurrentImage(banners[0])
    } else {
      const pos = currentImagePos + 1
      setCurrentImagePos(pos)
      setCurrentImage(banners[pos])
    }
  }

  function handlePreviousImage() {
    if (currentImagePos === 0) {
      setCurrentImagePos(banners.length - 1)
      setCurrentImage(banners[banners.length - 1])
    } else {
      const pos = currentImagePos - 1
      setCurrentImagePos(pos)
      setCurrentImage(banners[pos])
    }
  }

  return (
    <>
      <SEO title="Home" description={description} image="/occam.png" />
      {/* <ErrorModal
        isOpened
        title="Ocorreu um erro"
        subtitle="Tente novamente mais tarde"
      /> */}
      {/* <SuccessModal
        title="Inscrição Finalizada"
        subtitle="Enviaremos um email contendo todas as suas informações"
        isOpened={openSuccess}
        setOpen={setOpenSuccess}
        showCloseIcon={false}
        timer={10000}
      /> */}
      {/* <DataRequest isOpened /> */}
      {/* <SelectiveProcessForm isOpened /> */}
      <Page>
        <Initial>
          <Header />
          <main>
            <h1>Soluções Simples, Resultados Inovadores</h1>
            <div>
              <img src={currentImage} alt="logo animada OCCAM" />
              <div>
                <FaCaretLeft className="arrows" onClick={handlePreviousImage} />
                <span>O novo site da OCCAM está aqui!</span>
                <FaCaretRight className="arrows" onClick={handleNextImage} />
              </div>
            </div>
          </main>
        </Initial>
        <Actuation>
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
        </Actuation>

        <Members>
          <div>Nossa Equipe</div>
          <Member />
          <div>Histórico de Membros</div>
        </Members>

        <About>
          <div>
            <h4>Sobre Nós</h4>
            <span>
              Desde 2014 trabalhando para desenvolver atividades que possam
              ampliar e melhorar a qualidade de vida da comunidade ao seu redor.
            </span>
            <a href="/sobre-nos">
              Saiba Mais
              <FaCaretRight />
            </a>
          </div>
          <aside>
            <img src="/empresa.svg" alt="mãos sobre um computador" />
            <div></div>
          </aside>
        </About>

        <SectionFooter id="footer">
          <Marquee>
            <div>
              <h1>Nossos parceiros</h1>

              <button>
                Torne-se nosso parceiro <FaCaretRight />
              </button>
            </div>

            <aside>
              <section>
                <img src="parceiros/7keyframes.svg" alt="7keyframes" />
                <img src="parceiros/conectar.svg" alt="conectar" />
                <img src="parceiros/coca-cola.svg" alt="coca cola" />
              </section>
            </aside>
          </Marquee>
          <Footer />
        </SectionFooter>
      </Page>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get<IBanners[]>('/banners')
  const photos = data.map(d => d.photo)

  const serializedPhotos = photos.map(photo => {
    if (photo) {
      return photo.url
    }
  })
  return {
    props: { serializedPhotos }
  }
}

export default Home
