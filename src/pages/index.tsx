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
import MembersHome from '@/components/MembersHome'
import HomeCarousel from '@/components/HomeCarousel'
import Link from '@/components/Link'
// import DataRequest from '@/components/Modals/DataRequest'
// import ErrorModal from '@/components/Modals/ErrorModal'
// import SuccessModal from '@/components/Modals/SuccessModal'
// import SelectiveProcessForm from '@/components/Modals/SelectiveProcessForm'
import api from '@/services/api'

interface IPhoto {
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
interface IBanners {
  _id: string
  description: string
  reference_location: string
  href: string
  alt: string
  published_at: Date
  createdAt: Date
  updatedAt: Date
  __v: number
  photo: IPhoto
  id: string
}

interface IMember {
  course: string
  active: boolean
  _id: string
  link_linkedin: string
  link_github: string
  name: string
  slug: string
  output_date: Date
  phone: string
  birth_date: Date
  ra: string
  address: string
  entry_date: Date
  email: string
  published_at: Date
  positions: {
    department: string
    job: string
    _id: string
    tasks_description: string
    start_date_position: Date
    end_date_position: string
    __v: number
    id: string
  }
  createdAt: Date
  updatedAt: Date
  __v: number
  photo: IPhoto
  id: string
}

interface IResponse {
  id: string
  name: string
  role: string[]
  avatar: string
  link_github: string
  link_linkedin: string
}
type ISerializedPhotos = string[]

interface IBannner {
  id: string
  url: string
  description: string
}
interface IData {
  // banners: ISerializedPhotos
  members: IResponse[]
  banners: IBannner[]
}
const Home: React.FC<IData> = ({ banners, members }) => {
  const [member, setMember] = useState({} as IResponse)
  const [count, setCount] = useState(0)

  const [banner, setBanner] = useState({} as IBannner)
  const [countBanner, setCountBanner] = useState(0)

  function handlePanelMembers() {
    if (count < members.length - 1) {
      setCount(count + 1)
    } else {
      setCount(0)
    }
    setMember(members[count])
  }

  function handlePanelBanners() {
    if (countBanner < banners.length - 1) {
      setCountBanner(countBanner + 1)
    } else {
      setCountBanner(0)
    }
    setBanner(banners[countBanner])
  }

  setTimeout(() => {
    handlePanelMembers()
  }, 3500)

  setTimeout(() => {
    handlePanelBanners()
  }, 4000)

  const description = 'OCCAM Engenharia, Empresa Júnior de Computação UTFPR-PB'
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
            <HomeCarousel image={banner.url} description={banner.description} />
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
          <h3>Nossa Equipe</h3>
          <MembersHome
            key={member.id}
            name={member.name}
            role={member.name}
            image={member.avatar}
            github={member.link_github}
            linkedin={member.link_linkedin}
          />

          <a href="/membros">
            Histórico de Membros
            <FaCaretRight />
          </a>
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

export const getStaticProps: GetStaticProps<any> = async () => {
  const { data: dataBanners } = await api.get<IBanners[]>('/banners')
  // const photos = banners.map(d => d.photo)
  const banners = dataBanners.map(d => {
    return {
      description: d.description || null,
      ...(d.photo || null)
    }
  })

  const serializedPhotos = banners.map(photo => {
    return {
      id: photo.id,
      url: photo.url,
      description: photo.description
    }
  })

  const { data: dataMembers } = await api.get<IMember[]>(
    '/members?_sort=positions:asc'
  )

  const members = dataMembers.map(m => {
    let avatar = null
    if (m.photo) {
      avatar = m.photo.url
    }

    return {
      id: m.id,
      name: m.name,
      role: m.positions,
      avatar,
      link_github: m.link_github || null,
      link_linkedin: m.link_linkedin || null
    }
  })
  return {
    props: { members, banners: serializedPhotos }
  }
}

export default Home
