import { Actuation } from '@/styles/pages/Home'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import Link from '@/components/Link'

export const ActuationContainer: React.FC = () => (
  <Actuation>
    <main>
      <h3>Áreas de Atuação</h3>
      <section>
        <img
          src="Smartphone.svg"
          alt="Imagem de uma mão segurando um telefone"
        />
        <p>
          Desde 2012, a OCCAM Engenharia vem atuando no desenvolvimento web e
          mobile como serviços prestados
        </p>
      </section>
      <section>
        <img
          src="Computador.svg"
          alt="Imagem de um monitor e um tablet representando desenvolvimento web"
        />
        <p>
          Com especialidades em desenvolvimento web, a OCCAM Engenharia
          disponibiliza seus serviços para desenvolver sites e serviços web para
          clientes da região
        </p>
      </section>
      <section>
        <img
          src="/Engrenagem.svg"
          alt="Imagem de uma engrenagem com um botão de reproduzir no centro"
        />
        <p>
          Com instrutores especializados em diversas áreas, a empresa oferece
          treinamento à novos membros, repassando seus conhecimentos e formando
          futuros profissionais de qualidade
        </p>
      </section>

      <Link
        icon={BsFillQuestionCircleFill}
        href="/servicos"
        text="Saiba mais"
      />
    </main>
  </Actuation>
)
