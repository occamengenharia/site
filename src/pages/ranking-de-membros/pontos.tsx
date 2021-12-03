import SortableTable from '@/components/SortableTable'
import { Container } from '@/styles/pages/Pontos'

const Scores: React.FC = () => {
  return (
    <Container>
      <main>
        <h1>O que pode dar pontos?</h1>

        <section>
          {/* Caixinha 1 */}
          <span>
            <div id="div1">
              <span>x1</span>
            </div>
            <p>Fácil</p>
          </span>
          {/* Caixinha 2 */}
          <span>
            <div id="div2">
              <span>x2</span>
            </div>
            <p>Médio</p>
          </span>
          {/* Caixinha 3 */}
          <span>
            <div id="div3">
              <span>x4</span>
            </div>
            <p>Difícil</p>
          </span>
          {/* Caixinha 4 */}
          <span>
            <div id="div4">
              <span>x8</span>
            </div>
            <p>Muito difícil</p>
          </span>
        </section>

        <SortableTable
          initialSortColumn={{
            growing: true,
            columnIndex: 2
          }}
          columnHeaders={[
            { title: 'Descrição da atividade' },
            { title: 'Pontos', sortable: true }
          ]}
        ></SortableTable>
      </main>
    </Container>
  )
}
export default Scores
