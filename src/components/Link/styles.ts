import styled from 'styled-components'
import { darken } from 'polished'

export const Main = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: ${props => props.theme.variables.borderRadius}rem;
  color: ${props => props.theme.colors.background};
  height: 48px;
  width: 100%;
  background: ${props => props.theme.colors.secundary};
  svg {
    font-size: 1.6rem;
    margin-left: 1.6rem;
  }
  span {
    color: ${props => props.theme.colors.background};
    padding: 0 0.8rem;
    margin-left: 1.6rem;
    padding-left: 1.6rem;
    border-left: solid 1px ${props => props.theme.colors.background};
    font: 700 1.8rem Ubuntu;
  }

  transition: all ${props => props.theme.variables.transition}s;
  &:hover {
    background: ${({ theme }) =>
      darken(theme.variables.hover, theme.colors.secundary)};
  }

  & + & {
    margin-top: 0.8rem;
  }
`
