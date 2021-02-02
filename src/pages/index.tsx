import { useState } from 'react'
import { GetStaticProps } from 'next'
import NextLink from 'next/link'
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
import { useRouter } from 'next/router'

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
    job: string
    start_date_position: Date
    end_date_position: string
    id: string
  }[]
  createdAt: Date
  updatedAt: Date
  __v: number
  photo: IPhotoAPI
  id: string
}
export interface IMember {
  id: string
  name: string
  role: {
    job: string
    start_date_position: Date
    end_date_position: string
  }
  avatar: string
  link_github: string
  link_linkedin: string
}

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
  const router = useRouter()
  function navigateToContact() {
    router.push('/contato')
  }

  const description = 'OCCAM Engenharia, Empresa Júnior de Computação UTFPR-PB'
  return (
    <>
      <SEO title="Home" description={description} image="/occam.png" />

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

            <Link
              icon={BsFillQuestionCircleFill}
              href="/servicos"
              text="Saiba mais"
            />
          </main>
        </Actuation>

        <Members>
          <h3>Nossa Equipe</h3>
          <MembersHome members={members} />

          <NextLink href="/membros">
            <a>
              Histórico de Membros
              <FaCaretRight />
            </a>
          </NextLink>
        </Members>

        <About>
          <div>
            <h4>Sobre Nós</h4>
            <span>
              Desde 2012 trabalhando para desenvolver atividades que possam
              ampliar e melhorar a qualidade de vida da comunidade ao seu redor.
            </span>

            <NextLink href="/sobre-nos">
              <a>
                Saiba Mais
                <FaCaretRight />
              </a>
            </NextLink>
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

              <button onClick={navigateToContact}>
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
  const year = new Date().getFullYear()
  const { data: dataBanners } = await api.get<IBannerAPI[]>('/banners')
  const banners = dataBanners.map(d => {
    return {
      id: d.photo.id || 'a',
      alt: d.alt || 'a',
      url: d.photo.url || 'a',
      description: d.description || 'a'
    } as IBanner
  })

  const { data: dataMembers } = await api.get<IMemberAPI[]>(
    '/members?active=true'
  )

  const members: IMember[] = []

  dataMembers.filter(member => {
    const positionsOfYear = member.positions.filter(
      position =>
        new Date(position.start_date_position).getFullYear() === year &&
        position.job.toLowerCase().match(/diretor/gi)
    )
    if (positionsOfYear.length <= 0) {
      return false
    }
    if (
      new Date(positionsOfYear[0].start_date_position).getFullYear() === year
    ) {
      members.push({
        id: member.id,
        name: member.name,
        role: positionsOfYear[0],
        avatar: member.photo.url || '/404/caramelo.png',
        link_github: member.link_github || '',
        link_linkedin: member.link_linkedin || ''
      } as IMember)
    } else return false
  })

  return {
    props: { members, banners, showComponents: true }
  }
}
export default Home
