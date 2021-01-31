import { useState } from 'react'
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
import { FaCaretRight } from 'react-icons/fa'

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

interface IPhotoAPI {
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
interface IBannerAPI {
  _id: string
  description: string
  reference_location: string
  href: string
  alt: string
  published_at: Date
  createdAt: Date
  updatedAt: Date
  __v: number
  photo: IPhotoAPI
  id: string
}

interface IMemberAPI {
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
  photo: IPhotoAPI
  id: string
}

// interface IDataAPI {
//   banners: IBannerAPI[]
//   members: IMemberAPI[]
// }

interface IMember {
  id: string
  name: string
  role: {
    department: string
    job: string
    _id: string
    tasks_description: string
    start_date_position: Date
    end_date_position: string
    __v: number
    id: string
  }
  avatar: string
  link_github: string
  link_linkedin: string
}
// type ISerializedPhotos = string[]

interface IBanner {
  id: string
  url: string
  description: string
  alt: string
}

interface IPropsHome {
  showComponents: boolean
  members: IMember[]
  banners: IBanner[]
}
const Home: React.FC<IPropsHome> = ({ banners, members }) => {
  const [member, setMember] = useState({} as IMember)
  const [count, setCount] = useState(0)

  const [banner, setBanner] = useState({} as IBanner)
  const [countBanner, setCountBanner] = useState(0)

  function handlePanelMembers(): void {
    if (count < members.length - 1) {
      setCount(count + 1)
    } else {
      setCount(0)
    }
    setMember(members[count])
  }

  function handlePanelBanners(): void {
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
  }, 4500)

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
        subtitle="Enviaremos um e-mail contendo todas as suas informações"
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
            <HomeCarousel banners={banners} />
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
                Desde 2012, a OCCAM Engenharia vem atuando no desenvolvimento
                web e mobile como serviços prestados
              </p>
            </section>
            <section>
              <img
                src="Computador.svg"
                alt="Imagem de um monitor e um tablet representando desenvolvimento web"
              />
              <p>
                Com especialidades em desenvolvimento web, a OCCAM Engenharia
                disponibiliza seus serviços para desenvolver sites e serviços
                web para clientes da região
              </p>
            </section>
            <section>
              <img
                src="/Engrenagem.svg"
                alt="Imagem de uma engrenagem com um botão de reproduzir no centro"
              />
              <p>
                Com instrutores especializados em diversas áreas, a empresa
                oferece treinamento à novos membros, repassando seus
                conhecimentos e formando futuros profissionais de qualidade
              </p>
            </section>

            <Link icon={BsFillQuestionCircleFill} href="" text="Saiba mais" />
          </main>
        </Actuation>

        <Members>
          <h3>Nossa Equipe</h3>
          <MembersHome members={members} />

          <a href="/membros">
            Histórico de Membros
            <FaCaretRight />
          </a>
        </Members>

        <About>
          <div>
            <h4>Sobre Nós</h4>
            <span>
              Desde 2012 trabalhando para desenvolver atividades que possam
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

export const getStaticProps: GetStaticProps<IPropsHome> = async () => {
  const { data: dataBanners } = await api.get<IBannerAPI[]>('/banners')
  // const photos = banners.map(d => d.photo)
  const banners = dataBanners.map(d => {
    return {
      id: d.photo.id || 'a',
      alt: d.alt || 'a',
      url: d.photo.url || 'a',
      description: d.description || 'a'
      // ...(d.photo || null)
    } as IBanner
  })

  const { data: dataMembers } = await api.get<IMemberAPI[]>(
    '/members?_sort=positions:asc'
  )

  const members: IMember[] = dataMembers.map(m => {
    let avatar = ''
    if (m.photo) {
      avatar = m.photo.url
    }

    return {
      id: m.id,
      name: m.name,
      role: m.positions,
      avatar,
      link_github: m.link_github || '',
      link_linkedin: m.link_linkedin || ''
    }
  })
  return {
    props: { members, banners, showComponents: true }
  }
}
export default Home
