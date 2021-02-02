import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'
import { Container } from './styles'

interface IBanner {
  id: string
  url: string
  description: string
  alt: string
  href: string
}

interface HomeCarouselProps {
  banners: IBanner[]
}

const HomeCarousel: React.FC<HomeCarouselProps> = ({ banners }) => {
  const [currentBanner, setCurrentBanner] = useState(banners[0])
  const [countBanner, setCountBanner] = useState(0)
  const [time, setTime] = useState(0)

  const router = useRouter()

  const timeOut = setTimeout(() => {
    setTime(time + 1)
  }, 4500)
  function handlePreviousBanner(): void {
    if (countBanner < banners.length - 1) {
      setCountBanner(countBanner + 1)
    } else {
      setCountBanner(0)
    }
    setCurrentBanner(banners[countBanner])
    clearTimeout(timeOut)
  }
  function handleNextBanner(): void {
    if (countBanner >= banners.length - 1) {
      setCountBanner(0)
    } else {
      setCountBanner(countBanner + 1)
    }
    setCurrentBanner(banners[countBanner])
    clearTimeout(timeOut)
  }

  function navigate(link: string): void {
    if (!link.match(/http/gi)) {
      router.push(link)
    } else {
      window.open(link, '_blank')
    }
  }

  useEffect(() => {
    if (banners[0]) {
      setCurrentBanner(banners[0])
    }
  }, [])

  useEffect(() => {
    handleNextBanner()
  }, [time])
  return (
    <Container>
      <img
        src={currentBanner.url}
        alt={currentBanner.alt}
        onClick={() => navigate(currentBanner.href)}
      />
      <div>
        <FaCaretLeft className="arrows" onClick={handlePreviousBanner} />
        <span>{currentBanner.description}</span>
        <FaCaretRight className="arrows" onClick={handleNextBanner} />
      </div>
    </Container>
  )
}

export default HomeCarousel
