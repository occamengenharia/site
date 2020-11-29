import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  main {
    width: min(90vw, 500px);
    > section {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1 {
        font-size: 6.4rem;
        color: ${props => props.theme.colors.secundary};
      }
      h4 {
        font-size: 1.6rem;
        color: ${props => props.theme.colors.primary};
        margin-top: 0.8rem;
      }

      p {
        margin-top: 0.8rem;
        margin-bottom: 3.2rem;
        font-size: 1.2rem;
        line-height: 32px;
        color: ${props => props.theme.colors.text};
      }

      > img {
        width: 60%;
        margin-top: 6.4rem;
      }
    }
    > img {
      display: none;
    }
    @media (min-width: ${props => props.theme.breakpoints.md}px) {
      width: min(90vw, 1100px);
      display: flex;

      > img {
        display: initial;
        max-height: 80rem;
      }
    }
  }
`
