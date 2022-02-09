import { GetStaticProps } from 'next'
import { Page } from '@/styles/pages/Home'
import SEO from '@/components/SEO'

import api from '@/services/api'
import {
  ActuationContainer,
  InitialContainer,
  MembersContainer,
  AboutContainer,
  SectionFooterContainer
} from '@/containers'

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

export interface IBanner {
  id: string
  url: string
  description: string
  alt: string
  href: string
}

interface IPropsHome {
  showComponents: boolean
  members: IMember[]
  banners: IBanner[]
}
const Home: React.FC<IPropsHome> = ({ banners, members }) => {
  const description =
    'Bem vindo(a) ao site da OCCAM Engenharia, a empresa júnior dos cursos de Engenharia de Computação e Análise e Desenvolvimento de Sistemas da Universidade Tecnológica Federal do Paraná - UTFPR-PB'
  return (
    <>
      <SEO
        title="Página inicial"
        description={description}
        image="/logo/light.svg"
      />

      <Page>
        <InitialContainer banners={banners} />
        <ActuationContainer />
        <MembersContainer members={members} />
        <AboutContainer />
        <SectionFooterContainer />
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
      href: d.href,
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
        position.job.toLowerCase().match(/diretor|presidente/gi)
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
