import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'

import { useTheme } from '@/hooks/theme'
import { Main, HeaderContent, Burguer, Divider } from './styles'
import api from '@/services/api'
import { Tooltip } from '../Tooltip'

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
  const { theme } = useTheme()
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
    <>
      <Main>
        <HeaderContent openMenu={openDropDown}>
          <Link href="/">
            <img
              src={`/logo/${theme}.svg`}
              alt="Logo da OCCAM Engenharia na navegação"
            />
          </Link>

          <div className="links-header">
            <section>
              <Link href="/servicos">
                <a>Áreas de atuação</a>
              </Link>
              <Link href="/projetos">
                <a>Projetos</a>
              </Link>
              <Link href="/sobre-nos">
                <a>Sobre nós</a>
              </Link>
              <Link href="/redes-sociais">
                <a>Redes sociais</a>
              </Link>
              <Link href="/membros">
                <a>Membros</a>
              </Link>
              <Link href="/contato">
                <a>Contato</a>
              </Link>
              <Link href="/ranking">
                <a>Ranking</a>
              </Link>
              <Link href={`/processo-seletivo/${selectiveProcess.processSlug}`}>
                {selectiveProcess.selectiveProcessActive ? (
                  <a>PS</a>
                ) : (
                  <Tooltip
                    className="margin"
                    direction="left"
                    content="Parece que não é hora de um processo seletivo :/"
                  >
                    <a className="inactive">PS</a>
                  </Tooltip>
                )}
              </Link>
            </section>

            {/* will not have dark mode for now due to color organization problems */}
            {/* <ThemeSwitchButton onClick={toggleTheme}>
              {theme === 'light' ? <CgMoon /> : <CgSun />}
            </ThemeSwitchButton> */}

            <Burguer onClick={handleOpenDropDown}>
              {openDropDown ? <FiX /> : <FiMenu />}
            </Burguer>
          </div>
        </HeaderContent>
      </Main>
      <Divider />
    </>
  )
}
export default Header
