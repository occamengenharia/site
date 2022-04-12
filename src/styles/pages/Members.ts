import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  > h2 {
    font-size: 3.2rem;
    font-weight: bold;
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
  }

  button {
    height: fit-content;
    border: none;
    background: transparent;
    svg {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.text2};
      cursor: pointer;
    }
  }

  button:hover,
  button:focus {
    svg {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.primary};
      cursor: pointer;
    }
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
  --padding: 1.6rem;
  --gap: 4rem;
  padding: var(--padding);
  margin: 4.8rem 0 5.6rem;
  width: 100%;
  max-width: 103.2rem;
  align-self: center;
  display: grid;
  grid-template-columns: repeat(1, calc(100%));
  grid-gap: var(--gap);

  > h3 {
    color: ${({ theme }) => theme.colors.text2};
    grid-column: 1 / -1;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    grid-template-columns: repeat(
      2,
      calc((100% - var(--padding) * 2 - var(--gap)) / 2)
    );
    grid-gap: 4rem;
  }
`
