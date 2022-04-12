import { Base } from '@/containers/base'
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTwitter
} from 'react-icons/fa'
import * as S from './styles'
import { Theme, Themes } from './theme'

const SOCIAL_MEDIA = [
  {
    title: 'LinkedIn',
    url: 'OCCAM Engenharia',
    theme: Themes.linkedin,
    icon: <FaLinkedinIn />
  },
  {
    title: 'GitHub',
    url: 'occamengenharia',
    theme: Themes.github,
    icon: <FaGithub />
  },
  {
    title: 'Instagram',
    url: '@occamengenharia',
    theme: Themes.instagram,
    icon: <FaInstagram />
  },
  {
    title: 'Facebook',
    url: '/occamengenharia',
    theme: Themes.facebook,
    icon: <FaFacebook />
  },
  {
    title: 'Twitter',
    url: '@occamengenharia',
    theme: Themes.twitter,
    icon: <FaTwitter />
  }
]

const SocialNetwork: React.FC = () => {
  return (
    <Base>
      <S.Container>
        <S.Title>Nossas redes sociais</S.Title>
        <S.CardContainer>
          {SOCIAL_MEDIA.map(({ title, url, theme, icon }, index) => (
            <S.Card key={index} cardTheme={Theme[theme]}>
              <S.CardContent>
                <p className="title">{title}</p>
                <p className="description">{url}</p>
              </S.CardContent>
              <S.CardIcon>{icon}</S.CardIcon>
            </S.Card>
          ))}
        </S.CardContainer>
      </S.Container>
    </Base>
  )
}

export default SocialNetwork
