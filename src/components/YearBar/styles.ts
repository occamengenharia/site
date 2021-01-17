import styled from 'styled-components'

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
