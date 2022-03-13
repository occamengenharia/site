import styled from 'styled-components'

export const Container = styled.div`
  padding: 3.2rem 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  width: 100%:
  max-width: 54.4rem;

  @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    padding: 4.8rem 12rem;
  }
`

export const IconContainer = styled.div`
  svg {
    width: 9.6rem;
    height: 9.6rem;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    svg {
      width: 12rem;
      height: 12rem;
    }
  }
`

export const TextContainer = styled.div`
  text-align: center;
  max-width: 30.4rem;

  h1 {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.colors.neutral0};
  }

  h2 {
    font-size: 1.6rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.neutral15};
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  width: 100%;

  @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    flex-direction: row;
  }
`
