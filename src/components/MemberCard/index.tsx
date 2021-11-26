import { Card, Data, MemberData } from './styles'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

interface IDataProps {
  name: string
  position: string
  photo?: string
  link_github: string
  link_linkedin: string
}

const CardData: React.FC<IDataProps> = ({
  link_github,
  link_linkedin,
  name,
  photo,
  position
}) => {
  return (
    <Card>
      <MemberData>
        <img src={`${photo}` || '/404/caramelo.png'}></img>
        <Data>
          <h1>{name}</h1>
          <h2>{position}</h2>
        </Data>
      </MemberData>
      <div>
        <a href={link_linkedin}>
          <FaLinkedin />
        </a>
        <a href={link_github}>
          <FaGithub />
        </a>
      </div>
    </Card>
  )
}

export default CardData
