import { IButtonLinkProps } from './types'
import * as S from './styles'

export const ButtonLink: React.FC<IButtonLinkProps> = ({
  icon,
  href,
  width,
  height
}) => {
  return (
    <S.StyledButton href={href} width={width} height={height}>
      {icon}
    </S.StyledButton>
  )
}
