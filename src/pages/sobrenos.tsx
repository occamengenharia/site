import SEO from '@/components/SEO'
import Header from '@/components/Header'
import { Container, MVV, Stories } from '@/styles/pages/About'
import { useRouter } from 'next/router'
import {
  FaBook,
  FaEye,
  FaClipboardCheck,
  FaCaretLeft,
  FaCaretRight
} from 'react-icons/fa'
import { useCallback, useState } from 'react'
interface IStories {
  year: string
  description: string
  imgURL: string
}
const AboutUs: React.FC = () => {
  const description = 'OCCAM Engenharia, Empresa Júnior de Computação UTFPR-PB'
  const intro =
    'A Empresa Júnior de Engenharia de Computação da Universidade Tecnológica Federal do Paraná - UTFPR, vem desde 2014 trabalhando para desenvolver atividades que possam ampliar e melhorar a qualidade de vida da comunidade ao seu redor.'
  const DescriptMission =
    'Simplificar a vida das pessoas através de soluções inovadoras'
  const DescriptVision =
    'Alcançar reconhecimento por nossos clientes, meio universitário e sociedade em geral, sendo referência de qualidade e efiência, através de uma euipe altamente capacitada e qualificada'
  const DescriptValues = 'Inovação, Qualidade e Comprometimendo'
  const stories: Array<IStories> = [
    {
      year: '2020',
      description: 'sdad',
      imgURL:
        'https://blog.eseg.edu.br/wp-content/uploads/2020/01/original-bf4133e071e7512dd8555a59b631f147-780x450.jpg'
    },
    {
      year: '2021',
      description: 'sdad',
      imgURL:
        'https://blog.eseg.edu.br/wp-content/uploads/2020/01/original-bf4133e071e7512dd8555a59b631f147-780x450.jpg'
    },
    {
      year: '2022',
      description:
        'ausdhauishduiadc asdoiahsdjasndihas a sdnasodhasudhaiudhuasda dasudbaiuhdaudhsuhdasd',
      imgURL:
        'https://blog.eseg.edu.br/wp-content/uploads/2020/01/original-bf4133e071e7512dd8555a59b631f147-780x450.jpg'
    },
    {
      year: '2023',
      description: 'sdad',
      imgURL:
        'https://blog.eseg.edu.br/wp-content/uploads/2020/01/original-bf4133e071e7512dd8555a59b631f147-780x450.jpg'
    },
    {
      year: '2024',
      description: 'sdad',
      imgURL:
        'https://blog.eseg.edu.br/wp-content/uploads/2020/01/original-bf4133e071e7512dd8555a59b631f147-780x450.jpg'
    }
  ]

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
            <section>
              <span>
                <FaClipboardCheck />
                <hr />
              </span>
              <aside>
                <legend>Missão</legend>
                <p>{DescriptMission}</p>
              </aside>
            </section>
            <section>
              <span>
                <FaEye />
                <hr />
              </span>
              <aside>
                <legend>Visão</legend>
                <p>{DescriptVision}</p>
              </aside>
            </section>
            <section>
              <span>
                <FaBook />
              </span>
              <aside>
                <legend>Valores</legend>
                <p>{DescriptValues}</p>
              </aside>
            </section>
          </MVV>
          <h3>Nossa história</h3>
          <Stories>
            <div>
              {stories.map((storie, index) => (
                <section key={storie.year} id={storie.year}>
                  <main>
                    <img
                      src={storie.imgURL}
                      alt="Imagem sobre a gestão da empresa naquele ano"
                    />
                    <img
                      src={storie.imgURL}
                      alt="Imagem sobre a gestão da empresa naquele ano"
                    />
                    <img
                      src={storie.imgURL}
                      alt="Imagem sobre a gestão da empresa naquele ano"
                    />
                    <p>{storie.description}</p>
                  </main>
                  <aside>
                    {filterYear(Number(storie.year) - 2) && (
                      <a
                        href={`#${Number(storie.year) - 2}`}
                        onClick={() => setCurrentYear(currentYear - 2)}
                        id="extreme-left"
                      >
                        {Number(storie.year) - 2}
                      </a>
                    )}
                    {filterYear(Number(storie.year) - 1) && (
                      <a
                        href={`#${Number(storie.year) - 1}`}
                        onClick={() => setCurrentYear(currentYear - 1)}
                        id="left"
                      >
                        {Number(storie.year) - 1}
                      </a>
                    )}
                    <span>{storie.year}</span>
                    {filterYear(Number(storie.year) + 1) && (
                      <a
                        href={`#${Number(storie.year) + 1}`}
                        onClick={() => setCurrentYear(currentYear + 1)}
                        id="right"
                      >
                        {Number(storie.year) + 1}
                      </a>
                    )}
                    {filterYear(Number(storie.year) + 2) && (
                      <a
                        href={`#${Number(storie.year) + 2}`}
                        onClick={() => setCurrentYear(currentYear + 2)}
                        id="extreme-right"
                      >
                        {Number(storie.year) + 2}
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
