import Link from 'next/link'

import { Notfound } from '@/styles/pages/404'
import SEO from '@/components/SEO'

const NotFound: React.FC = () => {
  const senteces = [
    'Já que chegou até aqui, que tal coçar minha bariguinha?',
    'Enquanto encontra o que procura gostaria de um lambeijo?',
    'Opa deu erro, enche meu potinho de comida talvez funcione.',
    'Se ficar entediado, lhe sugiro morder o seu chinelo.',
    'Já vai? queria um carinho.'
  ]
  function getRandomSentences() {
    const index = Math.floor(Math.random() * senteces.length)
    return senteces[index]
  }

  return (
    <Notfound>
      <SEO title="Página não encontrada" shouldIndexPage={false} />
      <body>
        <h1>404</h1>
        <h2>Página não encontrada</h2>
        <div id="div2">
          <span>O Endereço buscado não está disponível </span>
          <span id="barra_vertical"> | </span>
          <Link href="/">
            <strong> Volte para home. </strong>
          </Link>
        </div>
        <img src="/404/caramelo.png" alt="Cachorro Caramelo" />
        <span id="falaOccao">- {getRandomSentences()} (OCCÃO, 2020)</span>
      </body>
    </Notfound>
  )
}

export default NotFound
