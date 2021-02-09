import { AppProps } from 'next/app'
import { ThemeProvider } from '@/hooks/theme'
import GlobalStyle from '../styles/global'
import { Header, Footer } from '@/components'

// import TagManager from 'react-gtm-module'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

// const isProduction = process.env.NODE_ENV === 'production'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      // if (isProduction) {
      gtag.pageview(url)
      // }
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ThemeProvider>
      {!pageProps.showComponents && <Header />}
      <Component {...pageProps} />
      <GlobalStyle />
      {!pageProps.showComponents && <Footer />}
    </ThemeProvider>
  )
}

export default MyApp
