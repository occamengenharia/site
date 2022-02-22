import styled from 'styled-components'
import { Form } from '@unform/web'
import { Main as Button } from '@/components/Button/styles'

export const Container = styled.main`
  width: 100%;
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

  #titulo {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  #logo-email {
    margin-right: 16px;
    font-size: 48px;
    color: ${props => props.theme.colors.titles};
  }

  h3 {
    color: ${props => props.theme.colors.titles};
  }

  p {
    color: ${props => props.theme.colors.subtitles};
    font-weight: 400;
    margin: 8px 0 96px 16px !important;
  }

  ${Button} {
    margin-top: 1.6rem;
    
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    width: 80%;

    h1 {
      margin: 4rem 0;
      font-size: 3.2rem;
    }
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.lg}px) {
    max-width: 80rem;
    #titulo {
      flex-direction: row;
    }
    ${Button} {
      width: 300px;
      align-self: flex-end;

    }

    h1 {
      width: 75rem;
      margin: 4rem 0;
      font-size: 5.6rem;
    }
  }
`
