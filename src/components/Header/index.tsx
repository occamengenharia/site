import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'

import { useTheme } from '@/hooks/theme'
import { CgMoon, CgSun } from 'react-icons/cg'
import { Main, HeaderContent, Burguer } from './styles'
import api from '@/services/api'
interface ISelectiveProcess {
  selectiveProcessActive: boolean
  processSlug: string
}
interface IProcessSeletive {
  marketing_department_description: string
  interview_start_date: Date
  start_date: Date
  slug: string
  collective_activity_date: Date
  opening_subscriptions: Date
  closing_subscriptions: Date
  end_date: Date
  finance_department_description: string
  project_department_description: string
  legal_department_description: string
  approved_disclosure_date: Date
  people_management_department_description: string
  description: string
  slogan: string
  photo_disclosure: {
    url: string
  }
  link_edital: string
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
          const openingDate = new Date(`${process.start_date} 00:00`)
          const closingDate = new Date(`${process.end_date} 00:00`)
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
