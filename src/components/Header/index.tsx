import { useCallback, useState } from 'react'
import Link from 'next/link'

import { useTheme } from '@/hooks/theme'
import { CgMoon, CgSun } from 'react-icons/cg'
import { Main, HeaderContent, Burguer } from './styles'

const Header: React.FC = () => {
  const { toggleTheme, theme } = useTheme()
  const [openDropDown, setOpenDropDown] = useState(false)

  const handleOpenDropDown = useCallback(() => {
    setOpenDropDown(state => !state)
  }, [])

  return (
    <Main>
      <HeaderContent>
        <Link href="/">
          <img src={`logo/${theme}.svg`} alt="OCCAM Engenharia" />
        </Link>

        <div>
          <Burguer openMenu={openDropDown}>
            <input
              id="menu-hamburguer"
              onChange={handleOpenDropDown}
              type="checkbox"
              checked={openDropDown}
            />

            <label htmlFor="menu-hamburguer">
              <div>
                <span></span>
              </div>
            </label>
            <div onClick={handleOpenDropDown} className="outside-menu">
              <div className="menu-links">
                <aside>
                  <Link href="/">
                    <a>Áreas de atuação</a>
                  </Link>
                  <Link href="/">
                    <a>Membros</a>
                  </Link>
                  <Link href="/">
                    <a>Sobre nós</a>
                  </Link>
                  <Link href="/">
                    <a>Contato</a>
                  </Link>
                  <Link href="/">
                    <a>Processo seletivo</a>
                  </Link>
                </aside>
              </div>
            </div>
          </Burguer>
          <section>
            <Link href="/">
              <a>Áreas de atuação</a>
            </Link>
            <Link href="/">
              <a>Membros</a>
            </Link>
            <Link href="/">
              <a>Sobre nós</a>
            </Link>
            <Link href="/">
              <a>Contato</a>
            </Link>
            <Link href="/">
              <a>Processo seletivo</a>
            </Link>
          </section>
          <button onClick={toggleTheme}>
            {theme === 'light' ? <CgMoon /> : <CgSun />}
          </button>
        </div>
      </HeaderContent>
    </Main>
  )
}

export default Header
