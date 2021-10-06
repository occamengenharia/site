import { ProgressArea, Statistics } from './styles'
import { IMembersStatistics, IPropsMemberProgress } from './interfaces'
import { useRef, useEffect } from 'react'
import { useTheme } from 'styled-components'
import Select from '../Select'
import { Form } from '@unform/web'

interface ICanvasOptions {
  percent: number
  canvasSize: number
  lineWidth: number
}
const useCanvas = (options: ICanvasOptions) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const theme = useTheme()
  console.log(theme)

  useEffect(() => {
    if (canvasRef.current) {
      const radius = (options.canvasSize - options.lineWidth) / 2
      const canvas = canvasRef.current
      canvas.width = canvas.height = options.canvasSize
      const ctx = canvas.getContext('2d')
      ctx.beginPath()
      ctx.arc(
        options.canvasSize / 2,
        options.canvasSize / 2,
        radius,
        -Math.PI / 2,
        (2 * Math.PI * options.percent) / 100 - Math.PI / 2,
        false
      )
      const gradient = ctx.createLinearGradient(
        0,
        options.canvasSize / 2,
        options.canvasSize,
        options.canvasSize / 2
      )
      gradient.addColorStop(1, theme.colors.complementary)
      gradient.addColorStop(0, theme.colors.titlesInverted)
      ctx.strokeStyle = gradient
      ctx.lineCap = 'round'
      ctx.lineWidth = options.lineWidth
      ctx.stroke()
    }
  }, [options, theme])

  return canvasRef
}

const MemberProgress: React.FC<IPropsMemberProgress> = ({
  level,
  percent,
  name,
  urlImg
}) => {
  const options = {
    percent: percent,
    canvasSize: 248,
    lineWidth: 4
  }
  const canvasRef = useCanvas(options)

  return (
    <ProgressArea {...options}>
      <canvas ref={canvasRef} title={'Progresso atual: ' + percent + '%'} />
      <img src={urlImg} alt={name} />
      <span>{level}</span>
    </ProgressArea>
  )
}

interface IMemberStatisticsProps {
  member: IMembersStatistics
}
const MemberStatistics: React.FC<IMemberStatisticsProps> = ({ member }) => {
  const fullName =
    member.name.split(' ')[0] +
    ' ' +
    member.name.split(' ')[member.name.split(' ').length - 1]
  const formRef = useRef()
  return (
    <Statistics>
      <figure>
        <MemberProgress {...member} />
        <figcaption>
          <label htmlFor="member">{fullName}</label>
          <i>{member.profession}</i>
        </figcaption>
      </figure>
      <Form ref={formRef} onSubmit={() => {}}>
        <Select
          name="member"
          inputId="member"
          placeholder="Selecione um membro"
          options={[
            {
              value: 'Tal',
              label: 'Tal'
            }
          ]}
        />
      </Form>
      {/* <aside>
          <h5>
            <strong>Total de pontos</strong>
            <span>{member.experiencePoints}xp</span>
          </h5>
          <h5>
            <strong>Posição no ranking</strong>
            <span>{2}</span>
          </h5>
          <h5>
            <strong>Conquistas</strong>
            {member.conquests?.map(conquest => (
              <span key={conquest.title} title={conquest.title}>
                {conquest.emoji}
              </span>
            ))}
          </h5>
        </aside> */}
    </Statistics>
  )
}
export default MemberStatistics
