import { GetStaticProps, GetStaticPaths } from 'next'
import { FaUserPlus, FaFileAlt } from 'react-icons/fa'

import Head from '@/components/SEO'
import {
  Container,
  Dates,
  DatesContent,
  Subscribe,
  InfoProcess,
  Descriptions
} from '@/styles/pages/Process'

import api from '@/services/api'
interface IProcessSeletive {
  _id: string
  marketing_department_description: string
  interview_start_date: Date
  start_date: Date
  slug: string
  collective_activity_date: Date
  end_date: Date
  finance_department_description: string
  project_department_description: string
  legal_department_description: string
  approved_disclosure_date: Date
  people_management_department_description: string
  description: string
  slogan: string
  published_at: Date
  createdAt: Date
  updatedAt: Date
  __v: number
  photo_disclosure: string
  id: string
}

const Process: React.FC<IProcessSeletive> = props => {
  return (
    <>
      <Head title={`Processo ${props.slug}`} image={props.photo_disclosure} />
      <Container>
        <h1>SLOGAN</h1>
        <InfoProcess>
          <Dates>
            <DatesContent>
              <span>Abertura inscrições</span>
              <div>
                <strong>10/07</strong>
              </div>
            </DatesContent>
            <DatesContent>
              <span>Encerramentodas inscrições</span>
              <div className="background-secundary">
                <strong>18/07</strong>
              </div>
            </DatesContent>
          </Dates>
          <img src={'http://placeimg.com/640/480/business'} alt="" />
          <Dates>
            <DatesContent className="date-content-bottom">
              <span>Dinâmica</span>
              <div>
                <strong>03/08</strong>
              </div>
            </DatesContent>
            <DatesContent className="date-content-bottom">
              <span>Entrevistas</span>
              <div className="background-secundary">
                <strong>04/08</strong>
              </div>
            </DatesContent>
            <DatesContent className="date-content-bottom">
              <span>Divulgação dosaprovados</span>
              <div>
                <strong>20/08</strong>
              </div>
            </DatesContent>
          </Dates>
        </InfoProcess>

        <Subscribe>
          <button className="button-and-link">
            <FaUserPlus />
            <span>Fazer inscrição</span>
          </button>

          <aside>Recuperar meus dados do processo seletivo</aside>
        </Subscribe>

        <Descriptions>
          <h2>Como funciona o Processo seletivo?</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in
            mauris a neque venenatis auctor ac sit amet justo. Proin quis varius
            diam. Praesent vitae massa viverra diam molestie bibendum eu cursus
            lacus. Etiam non feugiat mauris. Sed ac metus nec ligula commodo
            convallis. Etiam a metus tellus. Sed in ante tristique, luctus erat
            at, viverra dui. Nullam eu tellus orci. Nam varius leo odio, eget
            ullamcorper quam ultrices eu.{' '}
          </p>

          <h2>Qual setor me inscrever?</h2>

          <p>
            <strong>Projetos -</strong> Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Etiam in mauris a neque venenatis auctor ac sit
            amet justo.
          </p>

          <p>
            <strong>Jurídico -</strong> Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Etiam in mauris a neque venenatis auctor ac sit
            amet justo.
          </p>

          <p>
            <strong>Financeiro -</strong> Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Etiam in mauris a neque venenatis
            auctor ac sit amet justo.
          </p>

          <p>
            <strong>Marketing -</strong> Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Etiam in mauris a neque venenatis auctor ac sit
            amet justo.
          </p>
        </Descriptions>

        <a className="button-and-link" href="">
          <FaFileAlt />
          <span>Edital</span>
        </a>
      </Container>
    </>
  )
}

export default Process

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get<IProcessSeletive[]>('/selective-processes')

  const paths = data.map(process => {
    return { params: { slug: process.slug } }
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { params } = context
  const { data } = await api.get<IProcessSeletive[]>(
    `/selective-processes?slug=${params.slug}`
  )
  return {
    props: data[0]
    // revalidate: a cada 3 meses por
  }
}
