import Head from 'next/head'

import { Container } from '@/styles/pages/Home'

const NotFound: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Not found - OCCAM </title>
      </Head>

      <h1>Page not found</h1>
    </Container>
  )
}

export default NotFound
