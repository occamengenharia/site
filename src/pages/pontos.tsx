import SortableTable from '@/components/SortableTable'
import { Container } from '@/styles/pages/Ranking'
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import api from '@/services/api'
import { Multiply } from '../styles/pages/Pontos'
interface IPontosProps{
  id: string
  points: string
  description: string
  is_multipliable: string
}
interface IPointsProps {
    pointsList: IPontosProps[]
}

interface IDataProps {
    multiplier: string
    difficulty: string
    color: string
  }

const MultiplyPoints: React.FC<IDataProps> = ({
    multiplier,
    difficulty,
    color
  }) => {
    return (
      <Multiply jagunso = {color}>
          <h3>
            {multiplier + 'X'}
          </h3>
          <h4>
            {difficulty}
          </h4>
      </Multiply>
    )
  }

const Pontos: React.FC<IPointsProps> = ({ pointsList }) => {
  console.log(pointsList)
  return (
    <Container>
        <main>
            <h3>Pontos</h3>
            <section>
                <MultiplyPoints
                multiplier = "1"
                difficulty = "15"
                color = "#78C516"
                ></MultiplyPoints>

                <MultiplyPoints
                multiplier = "2"
                difficulty = "10"
                color = "#F7CF00"
                ></MultiplyPoints>

                <MultiplyPoints
                multiplier = "4"
                difficulty = "Difícil"
                color = "#E45B5B"
                ></MultiplyPoints>
                
                <MultiplyPoints
                multiplier = "8"
                difficulty = "Muito difícil"
                color = "#8B0909"
                ></MultiplyPoints>

            </section>
            
            <SortableTable
            columnHeaders={[
                { title: 'Descrição da atividade', },
                { title: 'Pontos' , sortable: false},
            ]}
            >
            {pointsList.map(points => (
                <tr>
                <td>{points.description }</td>
                <td>{points.points + points.is_multipliable}</td>
                </tr>
            ))}
            </SortableTable>

        </main>
      
    </Container>
  )
}


export const getServerSideProps: GetServerSideProps = async context => {
  console.log('teste')
  const { data: pointsList } = await api.get('/what-give-points')
  console.log(pointsList)
  return {
    props: {
        pointsList
    } 
  }
}

export default Pontos
