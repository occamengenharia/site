import { useEffect, useState } from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'
import { Container } from './styles'

interface IBanner {
  id: string
  url: string
  description: string
  alt: string
}

interface HomeCarouselProps {
  banners: IBanner[]
}

const HomeCarousel: React.FC<HomeCarouselProps> = ({ banners }) => {
  const [currentBanner, setCurrentBanner] = useState({} as IBanner)
  const [countBanner, setCountBanner] = useState(0)

  function handlePreviousBanner(): void {
    if (countBanner < banners.length - 1) {
      setCountBanner(countBanner + 1)
    } else {
      setCountBanner(0)
    }
    setCurrentBanner(banners[countBanner])
  }
  function handleNextBanner(): void {
    if (countBanner >= banners.length - 1) {
      setCountBanner(0)
    } else {
      setCountBanner(countBanner + 1)
    }
    setCurrentBanner(banners[countBanner])
  }

  useEffect(() => {
    if (banners[0]) {
      setCurrentBanner(banners[0])
    }
  }, [])

  setTimeout(() => {
    handleNextBanner()
  }, 4500)

  return (
    <Container>
      <img src={currentBanner.url} alt={currentBanner.alt} />
      <div>
        <FaCaretLeft className="arrows" onClick={handlePreviousBanner} />
        <span>{currentBanner.description}</span>
        <FaCaretRight className="arrows" onClick={handleNextBanner} />
      </div>
    </Container>
  )
}

export default HomeCarousel
