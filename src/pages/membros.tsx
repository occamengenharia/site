/* eslint-disable no-new */
import { GetStaticProps } from 'next'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'

import Card from '@/components/MemberCard'
import { Container, GridCards, Bar } from '@/styles/pages/Members'

import api from '@/services/api'
import SEO from '@/components/SEO'
import { useCallback, useEffect, useState } from 'react'

interface IPosition {
  job: string
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

interface IMemberSerealized {
  name: string
  position: IPosition
  link_linkedin: string
  link_github: string
  photo: string
}
interface IMembersSerealized {
  [key: string]: IMemberSerealized[]
}

const description =
  'Histórico de membros da OCCAM Engenharia, Empresa Júnior de Computação UTFPR-PB'

const Members: React.FC<IMembersSerealized> = props => {
  const nowYear = new Date().getFullYear()
  const [year, setYear] = useState(nowYear)

  const [members, setMembers] = useState([] as IMemberSerealized[])

  const handleMinus = useCallback(() => {
    if (year <= 2014) {
      setYear(nowYear)
    } else {
      setYear(year - 1)
    }
  }, [year])

  const handlePlus = useCallback(() => {
    if (year >= nowYear) {
      setYear(2014)
    } else {
      setYear(year + 1)
    }
  }, [year])

  useEffect(() => {
    setMembers(props[`${year}`].length > 0 ? props[`${year}`] : [])
  }, [year])

  return (
    <>
      <SEO title="Membros" image="/logo/light.svg" description={description} />
      <Container>
        <h2>Histórico de Membros</h2>

        <Bar>
          <button onClick={handleMinus}>
            <FaCaretLeft />
          </button>
          <h1> {year} </h1>
          <button onClick={handlePlus}>
            <FaCaretRight />
          </button>
        </Bar>

        <GridCards>
          {members.length > 0 ? (
            members.map(member => (
              <Card
                key={`${member.name}-${member.photo}`}
                name={member.name}
                link_github={member.link_github}
                link_linkedin={member.link_linkedin}
                photo={member.photo}
                position={member.position.job}
              />
            ))
          ) : (
            <h3>Nenhum membro Registrado</h3>
          )}
        </GridCards>
      </Container>
    </>
  )
}

export default Members
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
        position: getPostition(member, i),

        link_linkedin: member.link_linkedin || '',
        link_github: member.link_github || '',
        photo: member.photo ? member.photo.url : ''
      }
    })
    i++
  }
  return {
    props: membersSerealized,
    revalidate: 2592000
  }
}
function getPostition(member: IMember, year: number): IPosition {
  const end_date = `${year + 1}-01-01`
  const positions = member.positions.filter(position => {
    return (
      new Date(`${position.start_date_position} 00:00`).getFullYear() === year
    )
  })

  if (positions.length === 1) {
    return {
      job: positions[0].job,
      start_date_position: positions[0].start_date_position,
      end_date_position: positions[0].end_date_position || end_date
    }
  } else {
    let aux: IPosition = {
      job: 'Assessor',
      start_date_position: `${year}-01-01 00:00`,
      end_date_position: end_date
    }

    aux = positions.find(p => p.job.match(/presidente/gi))

    if (aux) {
      return {
        job: 'Presidente',
        start_date_position: aux.start_date_position,
        end_date_position: aux.end_date_position || end_date
      }
    }

    aux = positions.find(p => p.job.match(/diretor/gi))

    if (aux) {
      return {
        job: aux.job,
        start_date_position: aux.start_date_position,
        end_date_position: aux.end_date_position || end_date
      }
    }

    aux = positions.find(p => p.job.match(/assessor/gi))

    if (aux) {
      return {
        job: aux.job,
        start_date_position: aux.start_date_position,
        end_date_position: aux.end_date_position || end_date
      }
    }
    aux = positions.find(p => p.job.match(/trainee/gi))

    if (aux) {
      return {
        job: aux.job,
        start_date_position: aux.start_date_position,
        end_date_position: aux.end_date_position || end_date
      }
    }
    return aux
  }
}
