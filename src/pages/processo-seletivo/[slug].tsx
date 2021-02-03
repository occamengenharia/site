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
import SelectiveProcessForm from '@/components/Modals/SelectiveProcessForm'
import api from '@/services/api'
import formatDate from '@/utils/formatDate'
import Button from '@/components/Button'
import Link from '@/components/Link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import DataRequest from '@/components/Modals/DataRequest'

interface IProcessSeletive {
  marketing_department_description: string
  interview_start_date: Date
  start_date: Date
  end_date: Date
  slug: string
  collective_activity_date: Date
  opening_subscriptions: Date
  closing_subscriptions: Date
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
  const [subscribe, setSubscribe] = useState(false)
  const [requestData, setRequestData] = useState(false)
  const router = useRouter()
  function subscribeIsDisabled() {
    const currentDate = new Date()
    const openingDateSubscribe = new Date(
      `${props.opening_subscriptions} 00:00`
    )
    const closingDateSubscribe = new Date(
      `${props.closing_subscriptions} 00:00`
    )
    if (
      currentDate <= closingDateSubscribe &&
      currentDate >= openingDateSubscribe
    ) {
      return false
    }
    return true
  }
  useEffect(() => {
    const currentDate = new Date()
    const openingDate = new Date(`${props.start_date} 00:00`)
    const closingDate = new Date(`${props.end_date} 00:00`)
    if (!(currentDate <= closingDate && currentDate >= openingDate)) {
      router.push('/404')
    }
  }, [])

  return (
    <>
      <Head
        title={`Processo ${props.slug}`}
        image={`${props.photo_disclosure.url}`}
      />
      <SelectiveProcessForm isOpened={subscribe} setIsOpen={setSubscribe} />
      <DataRequest isOpened={requestData} setIsOpen={setRequestData} />
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
              <span>Encerramento das inscrições</span>
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
            src={props.photo_disclosure.url}
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
          <aside>
            <Button
              disabled={subscribeIsDisabled()}
              icon={FaUserPlus}
              text="Fazer inscrição"
              onClick={() => setSubscribe(true)}
            />
            {subscribeIsDisabled() && (
              <span>{` As inscrições estarão disponíveis entre ${formatDate(
                props.opening_subscriptions
              )} e ${formatDate(props.closing_subscriptions)} `}</span>
            )}
          </aside>

          <label onClick={() => setRequestData(true)}>
            Recuperar meus dados do processo seletivo
          </label>
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
        <Link text="Edital" icon={FaFileAlt} href={props.link_edital} />
      </Container>
    </>
  )
}
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
    props: data[0],
    revalidate: 3600
  }
}

export default Process
