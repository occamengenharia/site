import SortableTable from '@/components/SortableTable'
import MemberStatistics from '@/components/MemberStatistics'
import { IMembersStatistics } from '@/components/MemberStatistics/interfaces'
import { Container } from '@/styles/pages/Ranking'
const Ranking = () => {
  const memberExemple: IMembersStatistics = {
    name: 'Jeferson Rosa de Souza',
    profession: 'Diretor de Projetos',
    urlImg:
      'https://conectar.s3.sa-east-1.amazonaws.com/uploads/0a2d4b7366c9463aaea43de74a023efa.png',
    level: 15,
    conquests: [{ title: 'feliz', emoji: '🤫' }],
    percent: 92,
    experiencePoints: 1200
  }
  return (
    <Container>
      <main>
        <MemberStatistics member={memberExemple} />
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
          <tr>
            <td>1</td>
            <td>Gabriel Prando</td>
            <td>Presidente</td>
            <td>1000</td>
            <td>10</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Daniel Prando</td>
            <td>Diretor de marketing</td>
            <td>900</td>
            <td>9</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Cristiano Prando</td>
            <td>Diretor de Projetos</td>
            <td>1100</td>
            <td>10</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Gabriel Prando</td>
            <td>Presidente</td>
            <td>1000</td>
            <td>10</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Daniel Prando</td>
            <td>Diretor de marketing</td>
            <td>900</td>
            <td>9</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Cristiano Prando</td>
            <td>Diretor de Projetos</td>
            <td>1100</td>
            <td>10</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Gabriel Prando</td>
            <td>Presidente</td>
            <td>1000</td>
            <td>10</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Daniel Prando</td>
            <td>Diretor de marketing</td>
            <td>900</td>
            <td>9</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Cristiano Prando</td>
            <td>Diretor de Projetos</td>
            <td>1100</td>
            <td>10</td>
          </tr>
        </SortableTable>
      </main>
    </Container>
  )
}
export default Ranking
