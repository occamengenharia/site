import { AppProps } from 'next/app'
import { ThemeProvider } from '@/hooks/theme'
import GlobalStyle from '../styles/global'

import TagManager from 'react-gtm-module'
import { useEffect } from 'react'

const tagManagerArgs = {
  gtmId: 'GTM-T56P86F'
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
