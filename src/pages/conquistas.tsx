import SortableTable from '@/components/SortableTable'
import MemberStatistics from '@/components/MemberStatistics'
import { IMembersStatistics } from '@/components/MemberStatistics/interfaces'
import { Container } from '@/styles/pages/Ranking'
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import api from '@/services/api'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

interface IConquistasProps{
  id: string
  emoji: string
  title: string
  description: string
  reward: string
}
interface IAchievementProps {
    achievementsList: IConquistasProps[]
}

const Conquistas: React.FC<IAchievementProps> = ({ achievementsList }) => {
  console.log(achievementsList)
  return (
    <Container>
        <main>
            <h3>Conquistas</h3>
            <SortableTable
            columnHeaders={[
                { title: 'Emblema' , sortable: false},
                { title: 'Conquista' },
                { title: 'Descrição', },
                { title: 'Recompensa' },
            ]}
            >
            {achievementsList.map(achievement => (
                <tr>
                <td>{achievement.emoji}</td>
                <td>{achievement.title}</td>
                <td>{achievement.description}</td>
                <td>{achievement.reward}</td>
                </tr>
            ))}
            </SortableTable>

        </main>
      
    </Container>
  )
}


export const getServerSideProps: GetServerSideProps = async context => {
  console.log('teste')
  const { data: achievementsList } = await api.get('/achievements')
  console.log(achievementsList)
  return {
    props: {
        achievementsList
    } 
  }
}

export default Conquistas
