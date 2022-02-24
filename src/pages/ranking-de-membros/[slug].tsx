import SortableTable from '@/components/SortableTable'
import MemberStatistics from '@/components/MemberStatistics'
import { IMembersStatistics } from '@/components/MemberStatistics/interfaces'
import { Container, SmallBox, Tr } from '@/styles/pages/Ranking'
import { GetServerSideProps } from 'next'
import api from '@/services/api'
import { useRouter } from 'next/router'
interface IPosition {
  job: string
  start_date_position: string
  end_date_position: string
}
interface IMember {
  _id: string
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
interface IRankingProps {
  members: IMember[]
  currentMember?: IMember
}
const Ranking: React.FC<IRankingProps> = ({
  members,
  currentMember = {} as IMember
}) => {
  const memberExemple: IMembersStatistics = {
    name: 'Jeferson Rosa de Souza',
    profession: 'Diretor de Projetos',
    urlImg: currentMember.photo.url,
    level: 15,
    conquests: [{ title: 'feliz', emoji: '🤫' }],
    percent: 92,
    experiencePoints: 1200,
    ...currentMember
  }
  const router = useRouter()
  return (
    <Container>
      <main>
        <MemberStatistics
          member={memberExemple}
          selectOptions={members.map(member => {
            return {
              value: member.slug,
              label: member.name
            }
          })}
        />
        <h3>Placar Geral</h3>
        <SortableTable
          columnHeaders={[
            { title: 'Posição' },
            { title: 'Membro' },
            { title: 'Cargo' },
            { title: 'Pontos' },
            { title: 'Nível' }
          ]}
        >
          {members.map(member => (
            <Tr
              key={member.slug}
              isSelected={member.slug === router.query.slug}
              onClick={() => {
                router.push(`${member.slug}`)
              }}
            >
              <td>
                <SmallBox podium={1}>1</SmallBox>
              </td>
              <td>{member.name}</td>
              <td>{member.positions[member.positions.length - 1].job}</td>
              <td>{100}</td>
              <td>
                <SmallBox>10</SmallBox>
              </td>
            </Tr>
          ))}
        </SortableTable>
      </main>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { slug } = context.params
  const { data } = await api.get<IMember[]>('/members')
  const currentMember = data.find(member => member.slug === slug)
  const members = data.filter(member => member.active)
  return {
    props: {
      members,
      currentMember
    } as IRankingProps
  }
}

export default Ranking
