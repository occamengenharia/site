import { ProgressArea, Statistics } from './styles'
import { IMembersStatistics, IPropsMemberProgress } from './interfaces'
import { useRef, useEffect } from 'react'
import createConicalGradient from 'create-conical-gradient'

const useCanvas = (dataPercent: number) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  useEffect(() => {
    if (canvasRef.current) {
      const options = {
        percent: dataPercent,
        size: 248,
        lineWidth: 8,
        rotate: 0
      }
      const radius = (options.size - options.lineWidth) / 2
      const canvas = canvasRef.current
      canvas.width = canvas.height = options.size
      const ctx = canvas.getContext('2d')
      // const gradient = createConicalGradient(
      //   ctx,
      //   [
      //     [0, '#0773C6'],
      //     [1, '#014BB4']
      //   ],
      //   radius,
      //   radius,
      //   -Math.PI / 2,
      //   (3 * Math.PI) / 2
      // )

      ctx.beginPath()
      ctx.arc(
        options.size / 2,
        options.size / 2,
        radius,
        -Math.PI / 2,
        (2 * Math.PI * options.percent) / 100 - Math.PI / 2,
        false
      )
      ctx.strokeStyle = '#0773C6'
      ctx.lineCap = 'round'
      ctx.lineWidth = options.lineWidth
      ctx.stroke()
    }
  }, [dataPercent])

  return canvasRef
}

const MemberProgress: React.FC<IPropsMemberProgress> = ({
  level,
  percent,
  name,
  urlImg
}) => {
  const canvasRef = useCanvas(percent)

  return (
    <ProgressArea>
      <canvas ref={canvasRef} />
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
  return (
    <Statistics>
      <MemberProgress {...member} />
      <figcaption>
        <h3>{fullName}</h3>
        <i>{member.profession}</i>
        <aside>
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
        </aside>
      </figcaption>
    </Statistics>
  )
}
export default MemberStatistics
