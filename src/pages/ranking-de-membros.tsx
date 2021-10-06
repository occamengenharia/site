import CustomDataTable from '@/components/CustomDataTable'
import MemberStatistics from '@/components/MemberStatistics'
import { IMembersStatistics } from '@/components/MemberStatistics/interfaces'
import { Container } from '@/styles/pages/Ranking'
const Ranking = () => {
  const memberExemple: IMembersStatistics = {
    name: 'Jéferson da Conceição Zorante de Souza',
    profession: 'Procurado pela justiça',
    urlImg:
      'data:image/jpeg;base64,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',
    level: 15,
    conquests: [{ title: 'feliz', emoji: '🤫' }],
    percent: 99,
    experiencePoints: 1200
  }
  return (
    <Container>
      <main>
        <MemberStatistics member={memberExemple} />
        <h3>Placar Geral</h3>
        <CustomDataTable
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
        </CustomDataTable>
      </main>
    </Container>
  )
}
export default Ranking
