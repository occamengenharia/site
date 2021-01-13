import { Card, Data } from './styles'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const CardData: React.FC = () => {
  return (
    <Card>
      <img src="/404/caramelo.png"></img>
      <Data>
        <h1>Nome</h1>
        <h2>Funcao</h2>
      </Data>
      <FaGithub />
      <FaLinkedin />
    </Card>
  )
}

export default CardData
