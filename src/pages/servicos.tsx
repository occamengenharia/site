import SEO from '@/components/SEO'
import { FaCommentsDollar } from 'react-icons/fa'
import { Container } from '@/styles/pages/Servicos'
import Link from '@/components/Link'
const Servicos: React.FC = () => {
  const description =
    'Areas de atuação da OCCAM Engenharia, Empresa Júnior de Computação UTFPR-PB'

  return (
    <>
      <SEO title="Serviços" image="/logo/light.svg" description={description} />
      <Container>
        <main>
          <section>
            <h2>Áreas de atuação</h2>

            <h3>Desenvolvimento Web</h3>
            <p>
              Ingressada na área com grande conhecimento em JavaScript, a OCCAM
              Engenharia conta com uma equipe de desenvolvedores web que
              realizam planejamento, documentação e desenvolvimento de projetos
              tanto dentro da empresa quanto para terceiros, assim levando seu
              trabalho para toda região. Está área abrange todo o
              desenvolvimento de sites e aplicações em navegadores
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
              Com o grande mercado de aplicativos mobiles crescendo cada vez
              mais, a OCCAM Engenharia busca realizar projetos na área. Aqui se
              encontra o desenvolvimento de aplicativos Android e iOS.
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
              Uma das áreas mais recentes da empresa, buscamos expandir os
              conhecimentos e trazer novas tecnologias na área, trazendo
              soluções e otimizações de controle e comportamento de sistemas
              físicos. Área focada em eletrônica e sistemas controlados.
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
