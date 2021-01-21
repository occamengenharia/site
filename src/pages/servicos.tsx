import SEO from '@/components/SEO'
import { FaCommentsDollar } from 'react-icons/fa'
import { Container } from '@/styles/pages/Servicos'
import Link from '@/components/Link'
const Servicos: React.FC = () => {
  const description = 'OCCAM Engenharia, Empresa Júnior de Computação UTFPR-PB'

  return (
    <>
      <SEO title="Serviços" description={description} />
      <Container>
        <main>
          <section>
            <h2>Áreas de atuação</h2>

            <h3>Desenvolvimento Web</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              pharetra libero, non volutpat magna. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Maecenas aliquet sit amet massa sed dapibus. Nullam lacinia
              fermentum risus nec bibendum. In convallis sapien lectus, ac
              scelerisque risus efficitur id. Proin tincidunt massa ut mi
              venenatis sodales. Proin rhoncus blandit nisi eget aliquet.
              Pellentesque ut purus ornare, pretium nulla eu, hendrerit dui. Sed
              et enim ipsum. Pellentesque vel pharetra sem. Suspendisse potenti.
            </p>
            <div>
              <Link
                icon={FaCommentsDollar}
                href="/contato"
                text="Solicitar orçamento"
              />
            </div>

            <h3>Aplicativos</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              pharetra libero, non volutpat magna. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Maecenas aliquet sit amet massa sed dapibus. Nullam lacinia
              fermentum risus nec bibendum. In convallis sapien lectus, ac
              scelerisque risus efficitur id. Proin tincidunt massa ut mi
              venenatis sodales. Proin rhoncus blandit nisi eget aliquet.
              Pellentesque ut purus ornare, pretium nulla eu, hendrerit dui. Sed
              et enim ipsum. Pellentesque vel pharetra sem. Suspendisse potenti.
            </p>
            <div>
              <Link
                icon={FaCommentsDollar}
                href="/contato"
                text="Solicitar orçamento"
              />
            </div>
            <h3>Automação e controle</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              pharetra libero, non volutpat magna. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Maecenas aliquet sit amet massa sed dapibus. Nullam lacinia
              fermentum risus nec bibendum. In convallis sapien lectus, ac
              scelerisque risus efficitur id. Proin tincidunt massa ut mi
              venenatis sodales. Proin rhoncus blandit nisi eget aliquet.
              Pellentesque ut purus ornare, pretium nulla eu, hendrerit dui. Sed
              et enim ipsum. Pellentesque vel pharetra sem. Suspendisse potenti.
            </p>
            <div>
              <Link
                icon={FaCommentsDollar}
                href="/contato"
                text="Solicitar orçamento"
              />
            </div>
          </section>
        </main>
      </Container>
    </>
  )
}

export default Servicos
