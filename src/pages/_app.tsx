import { AppProps } from 'next/app'
import { ThemeProvider } from '@/hooks/theme'
import GlobalStyle from '../styles/global'

import TagManager from 'react-gtm-module'
import { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const tagManagerArgs = {
  gtmId: 'GTM-T56P86F'
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

  return (
    <ThemeProvider>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
