import styled from 'styled-components'

export const Container = styled.main`
  margin: 0 auto;
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  > h2 {
    font-size: 3.2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    > h2 {
      font-size: 8rem;
    }
  }
`

export const Bar = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 16rem;
  margin: 0 auto;

  > h1 {
    font-size: 2.4rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    font-size: 1.6rem;
  }

  button {
    background: white;
    border: none;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    > h1 {
      font-size: 3.2rem;
    }

    svg {
      font-size: 2.4rem;
    }
  }
`

export const GridCards = styled.div`
  padding: 1.6rem;
  margin: 4.8rem 0 5.6rem;

  max-width: 103.2rem;
  align-self: center;
  display: grid;
  grid-template-columns: repeat(1, calc(100%));
  grid-gap: 4rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    grid-template-columns: repeat(2, calc(100% / 2));
    grid-gap: 4rem;
  }
`
