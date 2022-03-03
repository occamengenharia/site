import SortableTable from '@/components/SortableTable'
import MemberStatistics from '@/components/MemberStatistics'
import { IAchievementsProps, IMembersStatistics } from '@/components/MemberStatistics/interfaces'
import { Container } from '@/styles/pages/Ranking'
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import api from '@/services/api'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
interface IPosition {
  job: string
  start_date_position: string
  end_date_position: string
}
interface ILevelProps{
    level: number
    maximum_points: string
    minimum_points: string
    _id: string
    status: string
    published_at: string
    createdAt: string
    updatedAt: string
    __v: string,
    id: string
}

interface IMember {
  _id: string
  course: 'CP' | 'ADS'
  active: boolean
  link_linkedin: string
  link_github: string
  name: string
  slug: string
  level: ILevelProps
  output_date: string
  entry_date: string
  positions: IPosition[]
  photo: {
    url: string
  }
  profession:string
  achievements: IAchievementsProps[]
  experiencePoints: number
}
interface IRankingProps {
  members: IMember[]
  currentMember?: IMember
}


const Ranking: React.FC<IRankingProps> = ({ members, currentMember }) => {
  
  if(!(JSON.stringify(currentMember) === "{}")){
    var memberStstisttic : IMembersStatistics = {
      profession: currentMember.profession,
      experiencePoints: currentMember.experiencePoints,
      conquests: currentMember.achievements,
      link_github: currentMember.link_github,
      link_linkedin: currentMember.link_linkedin,
      achievements: currentMember.achievements,
      level: currentMember.level.level,
      name: currentMember.name,
      percent: 30,
      total_experience: currentMember.experiencePoints?.toString(),
      urlImg: currentMember.photo.url
    }
  }

  

  return (
    <Container>
      <main>
        {!(JSON.stringify(currentMember) === "{}") && 
          <MemberStatistics
          member= {memberStstisttic}
          selectOptions={members.map(member => {
            return {
              value: member?.slug,
              label: member?.name
            }
          })}
      />
        }
        
        <h3>Placar Geral</h3>
        <SortableTable
          columnHeaders={[
            { title: 'Posição' },
            { title: 'Membro' },
            { title: 'Cargo', sortable: false },
            { title: 'Pontos' },
            { title: 'Nível' }
          ]}
        >
          {members.map(member => (
            <tr key={member.slug}>
              <td>1</td>
              <td>{member.name}</td>
              <td>{member.positions[member.positions.length - 1].job}</td>
              <td>{100}</td>
              <td>{10}</td>
            </tr>
          ))}
        </SortableTable>
      </main>
    </Container>
  )
}

interface IMebersSerialized {
  currentMember: string
  members: IMember[]
}
export const getServerSideProps: GetServerSideProps = async context => {
  console.log(context.params);
  console.log(JSON.stringify(context.params) === "{}");
  
  
  const { data } = await api.get<IMember[]>('/members')
  let currentMember = {} as IMember
  if(!(JSON.stringify(context.params) === "{}")){
    const { slug } = context.params
    console.log("entrei");
    
    currentMember = data.find(member => member.slug === slug[0])
  }
  
  const members = data.filter(member => member.active)
  
  return {
    props: {
      members,
      currentMember
    } as IRankingProps
  }
}

export default Ranking
