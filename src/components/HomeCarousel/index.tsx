import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'
import { Container } from './styles'

interface HomeCarouselProps {
  image: string
  description: string
}

const HomeCarousel: React.FC<HomeCarouselProps> = ({ image, description }) => {
  return (
    <Container>
      <img src={image} alt={description} />
      <div>
        <FaCaretLeft className="arrows" />
        <span>{description}</span>
        <FaCaretRight className="arrows" />
      </div>
    </Container>
  )
}

export default HomeCarousel
