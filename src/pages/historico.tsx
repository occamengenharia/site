/* eslint-disable no-new */
import { GetStaticProps } from 'next'
import Card from '@/components/MemberCard/index'
import { Page } from '@/components/MemberCard/styles'
import YearBar from '@/components/YearBar/index'
import api from '@/services/api'
import Member from '@/components/MembersHome'

interface IPosition {
  department: string
  job: string
  tasks_description: string
  start_date_position: string
  end_date_position: string
}

interface IMember {
  course: 'CP' | 'ADS'
  active: boolean
  link_linkedin: string
  link_github: string
  name: string
  slug: string
  output_date: string
  entry_date: string
  positions: IPosition[]
  photo: {
    url: string
  }
}
interface IMembersSerealized {
  [key: string]: {
    name: string
    position: IPosition
    link_linkedin: string
    link_github: string
    photo: string
  }[]
}

const positionsGeneric: IPosition = {
  department: 'Projetos',
  job: 'Assessor',
  tasks_description: 'Auxiliar no desenvolvimento de projetos',
  start_date_position: String(new Date().getFullYear()),
  end_date_position: String(new Date().getFullYear() + 1)
}

const Historico: React.FC = () => {
  return (
    <>
      <Page>
        <h2>Historico de Membros</h2>
        <YearBar></YearBar>
        <Card />
      </Page>
    </>
  )
}

export default Historico
export const getStaticProps: GetStaticProps = async context => {
  const { data } = await api.get<IMember[]>('members')

  let i = 2014
  const year = new Date().getFullYear()

  const membersSerealized = {} as IMembersSerealized

  while (i <= year) {
    const membersOfYear = data.filter(member => {
      const positionsOfYear = member.positions.filter(
        prosition => new Date(prosition.start_date_position).getFullYear() === i
      )
      if (positionsOfYear.length <= 0) {
        return false
      }
      return (
        new Date(positionsOfYear[0].start_date_position).getFullYear() === i
      )
    })

    membersSerealized[`${i}`] = membersOfYear.map(member => {
      return {
        name: member.name,
        position:
          member.positions.find(
            position =>
              new Date(position.start_date_position).getFullYear() === i
          ) || positionsGeneric,
        link_linkedin: member.link_linkedin,
        link_github: member.link_github,
        photo: member.photo ? member.photo.url : ''
      }
    })
    i++
  }

  console.log(JSON.stringify(membersSerealized))

  return {
    props: data[0]
    // revalidate: a cada 3 meses por
  }
}
