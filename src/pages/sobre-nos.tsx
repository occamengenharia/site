import SEO from '@/components/SEO'
import { Container, MVV, Stories } from '@/styles/pages/About'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import {
  FaBook,
  FaEye,
  FaClipboardCheck,
  FaCaretLeft,
  FaCaretRight
} from 'react-icons/fa'
import { useCallback, useState } from 'react'
import api from '@/services/api'
interface IStoriesRequest {
  photo: { url: string }
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
  stories: Array<IStories>
}
const AboutUs: React.FC<IAboutUsProps> = ({ stories }) => {
  const description = 'OCCAM Engenharia, Empresa Júnior de Computação UTFPR-PB'
  const intro =
    'A Empresa Júnior de Engenharia de Computação da Universidade Tecnológica Federal do Paraná - UTFPR, vem desde 2014 trabalhando para desenvolver atividades que possam ampliar e melhorar a qualidade de vida da comunidade ao seu redor.'
  const DescriptMission =
    'Simplificar a vida das pessoas através de soluções inovadoras'
  const DescriptVision =
    'Alcançar reconhecimento por nossos clientes, meio universitário e sociedade em geral, sendo referência de qualidade e efiência, através de uma euipe altamente capacitada e qualificada'
  const DescriptValues = 'Inovação, Qualidade e Comprometimendo'

  const [currentYear, setCurrentYear] = useState(
    Number(useRouter().asPath.split('/sobrenos#')[1] || stories[0].year)
  )
  const filterYear = useCallback(
    (year: number) => {
      for (let index = 0; index < stories.length; index++) {
        if (Number(stories[index].year) === year) {
          return true
        }
      }
      return false
    },
    [stories]
  )

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
            <div>
              {stories.map((storie, index) => (
                <section key={storie.description} id={String(storie.year)}>
                  <main>
                    <img
                      src={`${process.env.NEXT_PUBLIC_API_URL}${storie.imgURL}`}
                      alt="Imagem sobre a gestão da empresa naquele ano"
                    />
                    <img
                      src={`${process.env.NEXT_PUBLIC_API_URL}${storie.imgURL}`}
                      alt="Imagem sobre a gestão da empresa naquele ano"
                    />
                    <img
                      src={`${process.env.NEXT_PUBLIC_API_URL}${storie.imgURL}`}
                      alt="Imagem sobre a gestão da empresa naquele ano"
                    />
                    <p>{storie.description}</p>
                  </main>
                  <aside>
                    {filterYear(storie.year - 2) && (
                      <a
                        href={`#${storie.year - 2}`}
                        onClick={() => setCurrentYear(currentYear - 2)}
                        id="extreme-left"
                      >
                        {storie.year - 2}
                      </a>
                    )}
                    {filterYear(storie.year - 1) && (
                      <a
                        href={`#${storie.year - 1}`}
                        onClick={() => setCurrentYear(currentYear - 1)}
                        id="left"
                      >
                        {storie.year - 1}
                      </a>
                    )}
                    <span>{storie.year}</span>
                    {filterYear(storie.year + 1) && (
                      <a
                        href={`#${storie.year + 1}`}
                        onClick={() => setCurrentYear(currentYear + 1)}
                        id="right"
                      >
                        {storie.year + 1}
                      </a>
                    )}
                    {filterYear(storie.year + 2) && (
                      <a
                        href={`#${storie.year + 2}`}
                        onClick={() => setCurrentYear(currentYear + 2)}
                        id="extreme-right"
                      >
                        {storie.year + 2}
                      </a>
                    )}
                  </aside>
                </section>
              ))}
              <button
                disabled={!filterYear(currentYear - 1)}
                onClick={() => {
                  setCurrentYear(currentYear - 1)
                  window.location.href = `#${currentYear - 1}`
                }}
              >
                <FaCaretLeft />
              </button>
              <button
                disabled={!filterYear(currentYear + 1)}
                onClick={() => {
                  setCurrentYear(currentYear + 1)
                  window.location.href = `#${currentYear + 1}`
                }}
              >
                <FaCaretRight />
              </button>
            </div>
          </Stories>
        </main>
      </Container>
    </>
  )
}

export default AboutUs
export const getStaticProps: GetStaticProps = async context => {
  const { data } = await api.get<IStoriesRequest[]>('/histories')

  const stories: Array<IStories> = data.map(storie => {
    return {
      imgURL: storie.photo[0].url,
      description: storie.description,
      year: storie.year
    }
  })
  return {
    props: { stories }
  }
}
