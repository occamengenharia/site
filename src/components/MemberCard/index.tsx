import { Card, Data } from './styles'
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
      <img src={`${photo}` || '/404/caramelo.png'} alt={name} />
      <Data>
        <h1>{name}</h1>
        <h2>{position}</h2>
      </Data>
      <a href={link_github}>
        <FaGithub />
      </a>
      <a href={link_linkedin}>
        <FaLinkedin />
      </a>
    </Card>
  )
}

export default CardData
