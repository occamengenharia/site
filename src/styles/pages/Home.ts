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
      align-items: flex-start;
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
        font-size: 1.2rem;
        line-height: 32px;
        color: ${props => props.theme.colors.text};
      }
    }
    .img-hero {
      display: none;
    }
    @media (min-width: ${props => props.theme.breakpoints.md}px) {
      width: min(90vw, 1100px);
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-template-rows: auto;
      grid-gap: 2rem;
      padding-left: 3rem; //pra ajustar com a img
      .img-hero {
        display: initial;
        grid-column: 2;
        width: 800px;
      }
      > section {
        grid-column: 1;
      }
    }
  }
`
