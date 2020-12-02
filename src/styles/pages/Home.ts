import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  main {
    width: min(90vw, 500px);
    display: flex;
    justify-content: center;

    > section {
      max-width: 27.2rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      h1 {
        font-size: 6.4rem;
        color: ${props => props.theme.colors.secundary};
      }
      h4 {
        font-size: 1.6rem;
        color: ${props => props.theme.colors.primary};
        margin-top: 0.2rem;
      }

      p {
        margin-top: 0.4rem;
        margin-bottom: 3.2rem;
        font-size: 1.2rem;
        color: ${props => props.theme.colors.text};
      }

      > img {
        align-self: center;
        width: 60%;
        margin-top: 6.4rem;
      }
    }
    > img {
      display: none;
    }

    @media (min-width: ${props => props.theme.breakpoints.md}px) {
      width: min(90vw, 1000px);
      display: flex;
      justify-content: space-between;

      > section{
        align-items: flex-start;
        max-width: 41.6rem;

        h1{
           font-size: 9.6rem;
        }

        h4{
          font-size: 2.4rem;
        }

        > img{
          margin-top: 11.2rem;
        }
      }

      > img {
        align-self: flex-start;
        display: initial;
        max-width: 60rem;
      }
    }
  }
`
