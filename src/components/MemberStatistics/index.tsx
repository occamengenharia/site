import { ProgressArea, Statistics } from './styles'
import { IMembersStatistics, IPropsMemberProgress } from './interfaces'
import { useCallback, useRef } from 'react'
import { useTheme } from 'styled-components'
import Select from '../Select'
import { Form } from '@unform/web'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { Members } from '@/styles/pages/Home'
import { GroupedOptionsType, OptionsType, OptionTypeBase } from 'react-select'
import { useRouter } from 'next/router'

const MemberProgress: React.FC<IPropsMemberProgress> = ({
  level,
  percent,
  name,
  urlImg
}) => {
  const options = {
    percent: percent,
    canvasSize: 248,
    lineWidth: 6,
    radius: (248 - 6) / 2
  }
  const theme = useTheme()
  return (
    <ProgressArea {...options} title={'Progresso atual: ' + percent + '%'}>
      <svg>
        <defs>
          <linearGradient id="Gradient1" gradientTransform="rotate(90)">
            <stop
              offset="0%"
              stopColor={theme.colors.gradientStop1}
              stopOpacity="1"
            />
            <stop
              offset="100%"
              stopColor={theme.colors.gradientStop4}
              stopOpacity="1"
            />
          </linearGradient>
          <linearGradient id="Gradient2" gradientTransform="rotate(90)">
            <stop
              offset="0%"
              stopColor={theme.colors.gradientStop4}
              stopOpacity="1"
            />
            <stop
              offset="100%"
              stopColor={theme.colors.gradientStop4}
              stopOpacity="1"
            />
          </linearGradient>
          <pattern
            id="Pattern"
            x="0"
            y="0"
            width={500}
            height={500}
            patternUnits="userSpaceOnUse"
          >
            <g transform={`rotate(0, ${500 / 2}, ${500 / 2})`}>
              <rect
                shapeRendering="crispEdges"
                x="0"
                y="0"
                width={500 / 2}
                height={500}
                fill="url(#Gradient1)"
              />
              <rect
                shapeRendering="crispEdges"
                x={500 / 2}
                y="0"
                width={500 / 2}
                height={500}
                fill="url(#Gradient2)"
              />
            </g>
          </pattern>
        </defs>
        <circle cx="50%" cy="50%" r={options.radius} stroke="url('#Pattern')" />
      </svg>
      <img src={urlImg} alt={name} />
      <span>{level}</span>
    </ProgressArea>
  )
}

interface IMemberStatisticsProps {
  member: IMembersStatistics
  selectOptions:
    | GroupedOptionsType<OptionTypeBase>
    | OptionsType<OptionTypeBase>
}
const MemberStatistics: React.FC<IMemberStatisticsProps> = ({
  member,
  selectOptions
}) => {
  const fullName =
    member.name.split(' ')[0] +
    ' ' +
    member.name.split(' ')[member.name.split(' ').length - 1]
  const formRef = useRef()
  const router = useRouter()
  const handleChangeMember = useCallback((option: OptionTypeBase) => {
    if (option) {
      router.push(`/ranking-de-membros/${option.value}`)
    }
  }, [])
  return (
    <Statistics>
      <figure>
        <MemberProgress {...member} />
        <figcaption>
          <label htmlFor="member">{fullName}</label>
          <i>{member.profession}</i>
          <aside>
            <a href="">
              <AiFillGithub />
            </a>
            <a href="">
              <AiFillLinkedin />
            </a>
          </aside>
        </figcaption>
      </figure>
      <Form
        ref={formRef}
        onSubmit={() => {
          console.log('Subimissão feita por checagem')
        }}
      >
        <Select
          name="member"
          inputId="member"
          placeholder="Selecione um membro"
          onChange={handleChangeMember}
          options={selectOptions}
        />
      </Form>
    </Statistics>
  )
}
export default MemberStatistics
