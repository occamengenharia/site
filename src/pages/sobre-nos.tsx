import SEO from '@/components/SEO'
import { Container, MVV, Stories } from '@/styles/pages/About'
import { GetStaticProps } from 'next'
import {
  FaBook,
  FaEye,
  FaClipboardCheck,
  FaCaretLeft,
  FaCaretRight
} from 'react-icons/fa'
import { useCallback, useEffect, useState } from 'react'
import api from '@/services/api'
interface IStoriesRequest {
  photo: any
  _id: string
  year: number
  description: string
  published_at: Date
  createdAt: Date
  updatedAt: Date
  __v: number
  id: string
}
interface IStories {
  imgURL: string
  year: number
  description: string
}
interface IAboutUsProps {
  [index: string]: IStories
}
const AboutUs: React.FC<IAboutUsProps> = props => {
  const description = 'OCCAM Engenharia, Empresa Júnior de Computação UTFPR-PB'
  const intro =
    'A Empresa Júnior de Engenharia de Computação da Universidade Tecnológica Federal do Paraná - UTFPR, vem desde 2014 trabalhando para desenvolver atividades que possam ampliar e melhorar a qualidade de vida da comunidade ao seu redor.'
  const DescriptMission =
    'Simplificar a vida das pessoas através de soluções inovadoras'
  const DescriptVision =
    'Alcançar reconhecimento por nossos clientes, meio universitário e sociedade em geral, sendo referência de qualidade e efiência, através de uma euipe altamente capacitada e qualificada'
  const DescriptValues = 'Inovação, Qualidade e Comprometimendo'
  const nowYear = new Date().getFullYear()
  const [year, setYear] = useState(nowYear)
  const [yearsIndicators, setYearsIndicators] = useState<number[]>([])
  const [currentStorie, setCurrentStorie] = useState({} as IStories)

  const handleMinus = useCallback(() => {
    if (year <= 2014) {
      setYear(nowYear)
    } else {
      setYear(year - 1)
    }
  }, [year])

  const handlePlus = useCallback(() => {
    if (year >= nowYear) {
      setYear(2014)
    } else {
      setYear(year + 1)
    }
  }, [year])

  useEffect(() => {
    setCurrentStorie(props[`${year}`] ? props[`${year}`] : ({} as IStories))
    setYearsIndicators([
      year - 2 < 2014 ? (year - 1 < 2014 ? nowYear - 1 : nowYear) : year - 2,
      year - 1 < 2014 ? nowYear : year - 1,
      year,
      year + 1 > nowYear ? 2014 : year + 1,
      year + 2 > nowYear ? (year + 1 > nowYear ? 2015 : 2014) : year + 2
    ])
  }, [year])

  return (
    <>
      <SEO title="Sobre nós" description={description} image="/occam.png" />
      <Container>
        <main>
          <h2>Sobre nós</h2>
          <p>{intro}</p>
          <h3>Nossa missão, visão e valores</h3>
          <MVV>
            <button>
              <span>
                <FaClipboardCheck />
                <hr />
              </span>
              <aside>
                <legend>Missão</legend>
                <p>{DescriptMission}</p>
              </aside>
            </button>
            <button>
              <span>
                <FaEye />
                <hr />
              </span>
              <aside>
                <legend>Visão</legend>
                <p>{DescriptVision}</p>
              </aside>
            </button>
            <button>
              <span>
                <FaBook />
              </span>
              <aside>
                <legend>Valores</legend>
                <p>{DescriptValues}</p>
              </aside>
            </button>
          </MVV>
          <h3>Nossa história</h3>
          <Stories>
            <section>
              <main>
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL}${currentStorie.imgURL}`}
                  alt="Imagem sobre a gestão da empresa naquele ano"
                />
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL}${currentStorie.imgURL}`}
                  alt="Imagem sobre a gestão da empresa naquele ano"
                />
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL}${currentStorie.imgURL}`}
                  alt="Imagem sobre a gestão da empresa naquele ano"
                />
                <p>{currentStorie.description}</p>
              </main>
              <aside>
                {yearsIndicators.map(year => (
                  <span key={year} onClick={() => setYear(year)}>
                    {year}
                  </span>
                ))}
              </aside>
            </section>

            <FaCaretLeft onClick={handleMinus} />
            <FaCaretRight onClick={handlePlus} />
          </Stories>
        </main>
      </Container>
    </>
  )
}

export default AboutUs
export const getStaticProps: GetStaticProps = async context => {
  const { data } = await api.get<Array<IStoriesRequest>>('/histories')
  const stories = {} as IStories
  data.map(storie => {
    stories[`${storie.year}`] = {
      imgURL: storie.photo.url ? storie.photo.url : '#',
      description: storie.description,
      year: storie.year
    }
  })
  return {
    props: stories
  }
}
