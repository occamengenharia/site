import { Footer } from '@/components'
import { Marquee, SectionFooter } from '@/styles/pages/Home'
import { useRouter } from 'next/router'
import { FaCaretRight } from 'react-icons/fa'

export const SectionFooterContainer: React.FC = () => {
  const router = useRouter()

  return (
    <SectionFooter id="footer">
      <Marquee>
        <div>
          <h1>Nossos parceiros</h1>

          <a>
            <button onClick={() => router.push('/contato')}>
              Torne-se nosso parceiro <FaCaretRight />
            </button>
          </a>
        </div>

        <aside>
          <section>
            <img src="parceiros/7keyframes.svg" alt="Parceiro 7keyframes" />
          </section>
        </aside>
      </Marquee>
      <Footer />
    </SectionFooter>
  )
}
