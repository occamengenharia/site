import { HeaderStyle, HeadText, LogoStyle } from './styles';


export default function Header(){
    return(
        <HeaderStyle>
            <LogoStyle src="/occam.png"></LogoStyle>
            <div>
              <HeadText>Áreas de Atuação</HeadText>
              <HeadText>Membros</HeadText>
              <HeadText>Sobre Nós</HeadText>
              <HeadText>Contato</HeadText>
            </div>
        </HeaderStyle>
    )
}

