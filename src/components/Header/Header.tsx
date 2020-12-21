import { HeaderStyle, HeadText, LogoStyle, Burger } from './styles'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  function handleClick() {
    setOpenMenu(!openMenu)
  }
  return (
    <HeaderStyle>
      <LogoStyle src="/occam.png"></LogoStyle>
      <div>
        <HeadText>Áreas de Atuação</HeadText>
        <HeadText>Membros</HeadText>
        <HeadText>Sobre Nós</HeadText>
        <HeadText>Contato</HeadText>
      </div>
      <Burger onClick={handleClick}>
        <GiHamburgerMenu />
      </Burger>
    </HeaderStyle>
  )
}
