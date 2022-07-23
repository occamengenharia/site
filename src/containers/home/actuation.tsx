import { Actuation } from '@/styles/pages/Home'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import Link from '@/components/Link'

export const ActuationContainer: React.FC = () => (
  <Actuation>
    <aside>
      <div>
        <h3>Áreas de Atuação</h3>
      </div>
      <div>
        <Link
          href="/servicos"
          text="SAIBA MAIS"
        />
      </div>
    </aside>
    <main>
      <section>
        <div>
          <img
            src="Smartphone.svg"
            alt="Imagem de uma mão segurando um telefone"
          />
          <h3>
            MOBILE
          </h3>
        </div>
        <div>
          <p>
            Desde 2012, a OCCAM Engenharia vem atuando no desenvolvimento web e
            mobile como serviços prestados
          </p>
        </div>
      </section>
      <section>
        <div>
          <img
            src="Computador.svg"
            alt="Imagem de um monitor e um tablet representando desenvolvimento web"
          />
          <h3>
            WEB
          </h3>
        </div>
        <div>
          <p>
            Com especialidades em desenvolvimento web, a OCCAM Engenharia
            disponibiliza seus serviços para desenvolver sites e serviços web para
            clientes da região
          </p>
        </div>
      </section>
      <section>
        <div>
          <img
            src="/Engrenagem.svg"
            alt="Imagem de uma engrenagem com um botão de reproduzir no centro"
          />
          <h3>
            AUTOMAÇÃO
          </h3>
        </div>
        <div>
          <p>
            Com instrutores especializados em diversas áreas, a empresa oferece
            treinamento à novos membros, repassando seus conhecimentos e formando
            futuros profissionais de qualidade
          </p>
        </div>
      </section>
    </main>
  </Actuation>
)
