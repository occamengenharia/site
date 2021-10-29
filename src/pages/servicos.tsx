import SEO from '@/components/SEO'
import { FaCommentsDollar } from 'react-icons/fa'
import { Container } from '@/styles/pages/Servicos'
import Link from '@/components/Link'

const Services: React.FC = () => {
  const description =
    'Conheça as áreas de atuação dos projetos da OCCAM Engenharia, Empresa Júnior de Computação UTFPR-PB'

  return (
    <>
      <SEO
        title="Nossos serviços"
        image="/logo/light.svg"
        description={description}
      />
      <Container>
        <main>
          <section>
            <h2>Áreas de atuação</h2>

            <h3>Desenvolvimento Web</h3>
            <p>
              A OCCAM Engenharia conta com uma equipe de desenvolvedores web que
              realizam planejamento, documentação e desenvolvimento de projetos
              tanto dentro da empresa quanto para terceiros, assim levando seu
              trabalho para toda região. Está área abrange todo o
              desenvolvimento de sites e aplicações em navegadores
            </p>
            <Link
              icon={FaCommentsDollar}
              href="/contato"
              text="Solicitar orçamento"
            />

            <h3>Aplicativos</h3>
            <p>
              Com o grande mercado de aplicativos mobiles crescendo cada vez
              mais, a OCCAM Engenharia busca realizar projetos na área. Aqui
              você encontra o desenvolvimento de aplicativos Android e iOS.
            </p>
            <Link
              icon={FaCommentsDollar}
              href="/contato"
              text="Solicitar orçamento"
            />

            <h3>Automação e controle</h3>
            <p>
              Uma das áreas mais recentes da empresa, buscamos expandir os
              conhecimentos e oferecer novas tecnologias na área, trazendo
              soluções, otimizações de controle e comportamento de sistemas
              físicos. Área focada em eletrônica e sistemas controlados.
            </p>
            <Link
              icon={FaCommentsDollar}
              href="/contato"
              text="Solicitar orçamento"
            />
          </section>
        </main>
      </Container>
    </>
  )
}

export default Services
