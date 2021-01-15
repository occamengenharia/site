import styled from 'styled-components'
import { Form } from '@unform/web'

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.6rem;
`

export const FormStyled = styled(Form)`
  margin-top: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 96%;

  h1 {
    margin-bottom: 2rem;
    color: ${props => props.theme.colors.secundary};
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.4rem;

    margin: 3rem 0;
    border-radius: 2.4rem;
    width: 24rem;
    height: 5rem;
    border: 1px solid ${props => props.theme.colors.secundary};
    align-self: center;
    background: transparent;
    color: ${props => props.theme.colors.secundary};
    transition: all 0.6s;

    svg {
      margin-left: 1rem;
      color: ${props => props.theme.colors.secundary};
    }

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    width: 80%;

    h1 {
      margin: 4rem 0;
      font-size: 3.2rem;
    }
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.lg}px) {
    max-width: 102.4rem;

    h1 {
      width: 75rem;
      margin: 4rem 0;
      font-size: 5.6rem;
    }

    button {
      margin-top: 6rem;
      align-self: flex-start;
      margin-left: -8rem;
    }
  }
`
