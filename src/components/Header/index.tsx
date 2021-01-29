import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'

import { useTheme } from '@/hooks/theme'
import { CgMoon, CgSun } from 'react-icons/cg'
import { Main, HeaderContent, Burguer } from './styles'
import { GetStaticProps } from 'next'
import api from '@/services/api'
import { IProcessSeletive } from '@/pages/processo-seletivo/[slug]'
interface ISelectiveProcess {
  selectiveProcessActive: boolean
  processSlug: string
}
const Header: React.FC = () => {
  const { toggleTheme, theme } = useTheme()
  const [openDropDown, setOpenDropDown] = useState(false)

  const handleOpenDropDown = useCallback(() => {
    setOpenDropDown(state => !state)
  }, [])
  const [selectiveProcess, setSelectiveProcess] = useState(
    {} as ISelectiveProcess
  )
  const currentDate = new Date()
  useEffect(() => {
    api
      .get<IProcessSeletive[]>('/selective-processes?active=true')
      .then(response => {
        response.data.map(process => {
          const closingDate = new Date(process.closing_subscriptions)
          const openingDate = new Date(process.opening_subscriptions)
          if (currentDate <= closingDate && currentDate >= openingDate) {
            setSelectiveProcess({
              selectiveProcessActive: true,
              processSlug: process.slug
            })
          }
        })
      })
  }, [])
  return (
    <Main hasSelectiveProcess={selectiveProcess.selectiveProcessActive}>
      <HeaderContent>
        <Link href="/">
          <img src={`/logo/${theme}.svg`} alt="OCCAM Engenharia" />
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
                  <Link href="/servicos">
                    <a>Áreas de atuação</a>
                  </Link>
                  <Link href="/membros">
                    <a>Membros</a>
                  </Link>
                  <Link href="/sobre-nos">
                    <a>Sobre nós</a>
                  </Link>
                  <Link href="/contato">
                    <a>Contato</a>
                  </Link>
                  <Link
                    href={`/processo-seletivo/${selectiveProcess.processSlug}`}
                  >
                    <a className="inactive">Processo seletivo</a>
                  </Link>
                </aside>
              </div>
            </div>
          </Burguer>
          <section>
            <Link href="/">
              <a>Áreas de atuação</a>
            </Link>
            <Link href="/membros">
              <a>Membros</a>
            </Link>
            <Link href="/sobre-nos">
              <a>Sobre nós</a>
            </Link>
            <Link href="/contato">
              <a>Contato</a>
            </Link>
            <Link href={`/processo-seletivo/${selectiveProcess.processSlug}`}>
              <a className="inactive">Processo seletivo</a>
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
