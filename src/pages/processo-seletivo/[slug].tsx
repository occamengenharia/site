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
import formatDate from '@/utils/formatDate'
interface IProcessSeletive {
  marketing_department_description: string
  interview_start_date: Date
  start_date: Date
  slug: string
  collective_activity_date: Date
  opening_subscriptions: Date
  closing_subscriptions: Date
  end_date: Date
  finance_department_description: string
  project_department_description: string
  legal_department_description: string
  approved_disclosure_date: Date
  people_management_department_description: string
  description: string
  slogan: string
  photo_disclosure: {
    url: string
  }
  link_edital: string
}

const Process: React.FC<IProcessSeletive> = props => {
  return (
    <>
      <Head
        title={`Processo ${props.slug}`}
        image={`${process.env.NEXT_PUBLIC_API_URL}${props.photo_disclosure.url}`}
      />
      <Container>
        <h1>{props.slogan}</h1>
        <InfoProcess>
          <Dates>
            <DatesContent>
              <span>Abertura inscrições</span>
              <div>
                <strong>{formatDate(props.opening_subscriptions)}</strong>
              </div>
            </DatesContent>
            <DatesContent>
              <span>Encerramentodas inscrições</span>
              <div className="background-secundary">
                <strong>{formatDate(props.closing_subscriptions)}</strong>
              </div>
            </DatesContent>
            <DatesContent className="date-top">
              <span>Dinâmica </span>
              <div>
                <strong>{formatDate(props.collective_activity_date)}</strong>
              </div>
            </DatesContent>
            <DatesContent className="date-top">
              <span>Entrevistas</span>
              <div className="background-secundary">
                <strong>{formatDate(props.interview_start_date)}</strong>
              </div>
            </DatesContent>
            <DatesContent className="date-top">
              <span>Divulgação dos aprovados</span>
              <div>
                <strong>{formatDate(props.approved_disclosure_date)}</strong>
              </div>
            </DatesContent>
          </Dates>
          <img
            src={`${process.env.NEXT_PUBLIC_API_URL}${props.photo_disclosure.url}`}
            alt="Foto do Processo Seletivo"
          />
          <Dates className="dates-down">
            <DatesContent className="date-content-bottom">
              <span>Dinâmica</span>
              <div>
                <strong>{formatDate(props.collective_activity_date)}</strong>
              </div>
            </DatesContent>
            <DatesContent className="date-content-bottom">
              <span>Entrevistas</span>
              <div className="background-secundary">
                <strong>{formatDate(props.interview_start_date)}</strong>
              </div>
            </DatesContent>
            <DatesContent className="date-content-bottom">
              <span>Divulgação dos aprovados</span>
              <div>
                <strong>{formatDate(props.approved_disclosure_date)}</strong>
              </div>
            </DatesContent>
          </Dates>
        </InfoProcess>

        <Subscribe>
          <button className="button-and-link">
            <FaUserPlus />
            <span>Fazer inscrição</span>
          </button>

          <a href={props.link_edital}>
            Recuperar meus dados do processo seletivo
          </a>
        </Subscribe>

        <Descriptions>
          <h2>Como funciona o Processo seletivo?</h2>

          <p>{props.description}</p>

          <h2>Qual setor me inscrever?</h2>

          <p>
            <strong>PROJETOS -</strong> {props.project_department_description}
          </p>

          <p>
            <strong>JURÍDICO -</strong> {props.legal_department_description}
          </p>

          <p>
            <strong>FINANCEIRO -</strong> {props.finance_department_description}
          </p>
          <p>
            <strong>GESTÃO DE PESSOAS - </strong>
            {props.people_management_department_description}
          </p>

          <p>
            <strong>MARKETING -</strong>
            {props.marketing_department_description}
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
