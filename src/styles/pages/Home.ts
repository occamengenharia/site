import styled from 'styled-components'
export const Page = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  scroll-behavior: smooth;

  > div {
    scroll-snap-align: start;
    height: 100%;
    position: relative;
    &:nth-child(even) {
      background: ${props => props.theme.colors.primary};
    }
  }
`
export const Initial = styled.div``
export const Actuation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > main {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8%;
    width: min(1100px, 90vw);
    color: white;
    > section {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.2rem;
      p {
        font-size: 1.2rem;
        text-align: justify;
      }
      img {
        width: 8rem;
      }
    }
    a {
      background: white;
      color: ${props => props.theme.colors.secundary};
      span {
        border-left: solid 1px ${props => props.theme.colors.secundary};
        color: ${props => props.theme.colors.secundary};
      }
    }
    @media (min-width: ${props => props.theme.breakpoints.md}px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 6rem;
      grid-template-rows: 1fr 2fr 1fr;
      > h3 {
        grid-column: 1 / -1;
        grid-row: 1;
      }
      > section {
        flex-direction: column;
        gap: 4rem;
        img {
          width: 20rem;
        }
        p {
          font-size: 1.6rem;
        }
        &:nth-of-type(1) {
          grid-column: 1;
          grid-row: 2;
        }
        &:nth-of-type(2) {
          grid-column: 2;
          grid-row: 2;
        }
        &:nth-of-type(3) {
          grid-column: 3;
          grid-row: 2;
        }
      }
      a {
        grid-column: 3;
        grid-row: 3;
      }
    }
  }
`
export const Members = styled.div``
export const AboutUs = styled.div``
export const Footer = styled.div``
