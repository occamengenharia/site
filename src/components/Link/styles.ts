import styled from 'styled-components'
import LinkNext from 'next/link'
export const Main = styled(LinkNext)`
  width: 100%;
  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: ${props => props.theme.variables.borderRadius}rem;
    font: 500 1.6rem Ubuntu;
    color: ${props => props.theme.colors.background};
    padding: 0.4rem 0.8rem;
    margin: 0.8rem 0;
    height: 48px;
    width: 100%;
    background: ${props => props.theme.colors.secundary};
    span {
      color: ${props => props.theme.colors.background};
      padding: 0 0.8rem;
      border-right: solid 1px ${props => props.theme.colors.background};
      svg {
        font-size: 1.6rem;
      }
    }
  }
`
