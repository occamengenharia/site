import styled from 'styled-components'
import { Form } from '@unform/web'
import { Main as Button } from '@/components/Button/styles'

export const Container = styled.main`
  width: 100%;
  max-width: 115.2rem;
  margin: 8rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2.4rem;

  @media only screen and (min-width: ${props => props.theme.breakpoints.lg}px) {
    padding: 0;
  }
`

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 115.2rem;
  width: 100%;
`

export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  margin-bottom: 8rem;

  p {
    font-size: 1.2rem;
    font-weight: 300;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.lg}px) {
    margin-bottom: 4.8rem;

    p {
      font-size: 1.8rem;
    }
  }
`
