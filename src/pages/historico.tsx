/* eslint-disable no-new */
import { GetStaticProps } from 'next'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'

import Card from '@/components/MemberCard'
import { Container, GridCards, Bar } from '@/styles/pages/History'

import api from '@/services/api'
import { useState } from 'react'

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

const positionsGeneric: IPosition = {
  department: 'Projetos',
  job: 'Assessor',
  tasks_description: 'Auxiliar no desenvolvimento de projetos',
  start_date_position: String(new Date().getFullYear()),
  end_date_position: String(new Date().getFullYear() + 1)
}

const Historico: React.FC<IMembersSerealized> = props => {
  const nowYear = new Date().getFullYear()
  const [year, setYear] = useState(nowYear)

  const [members, setMembers] = useState([] as IMemberSerealized[])

  function handleMinus() {
    let x = year
    if (x > 2015) {
      x = x - 1
      setYear(x)
      setMembers(props[`${year}`].length > 0 ? props[`${year}`] : [])
    } else if (x === 2015) {
      setYear(nowYear)
      setMembers(props[`${year}`].length > 0 ? props[`${year}`] : [])
    }
  }

  function handlePlus() {
    console.log(props[`${year}`], members)

    let x = year
    if (x < nowYear) {
      x = x + 1
      setYear(x)
      setMembers(props[`${year}`].length > 0 ? props[`${year}`] : [])
    } else if (x === nowYear) {
      setYear(2015)
      setMembers(props[`${year}`].length > 0 ? props[`${year}`] : [])
    }
  }

  return (
    <>
      <Container>
        <h2>Histórico de Membros</h2>

        <Bar>
          <button type="button" onClick={handleMinus}>
            <IoMdArrowDropleft />
          </button>
          <h1> {year} </h1>
          <button type="button" onClick={handlePlus}>
            <IoMdArrowDropright />
          </button>
        </Bar>

        <GridCards>
          {members.map(member => (
            <Card
              key={member.photo}
              name={member.name}
              link_github={member.link_github}
              link_linkedin={member.link_linkedin}
              // photo={member.photo}
              position={member.position.department}
            />
          ))}
        </GridCards>
      </Container>
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
    props: membersSerealized
    // revalidate: a cada 3 meses por
  }
}
