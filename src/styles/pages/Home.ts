import styled from 'styled-components'

export const Page = styled.div`
  scroll-snap-type: y mandatory;
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  > div {
    scroll-snap-align: start;
    height: 100%;
    position: relative;
  }
`

export const Initial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 6%;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 27.2rem;

    h1 {
      font-size: 4.8rem;
      text-align: center;
      margin-bottom: 4.8rem;

      color: ${props => props.theme.colors.primary};
    }

    div {
      transition: all 0.5s;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;

      box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.25);

      img {
        width: 27.2rem;
        height: 15.4rem;
      }
      div {
        background-color: ${props => props.theme.colors.secundary};
        width: 100%;
        padding: 0.8rem 0;

        span {
          color: ${props => props.theme.colors.background};
        }

        svg {
          display: none;
        }
      }
    }

    @media only screen and (min-width: ${props =>
        props.theme.breakpoints.lg}px) {
      flex-direction: row;
      justify-content: space-between;
      max-width: 103.2rem;

      h1 {
        font-size: 9.6rem;
        margin: 0;
        text-align: left;
      }

      div {
        img {
          width: 41.6rem;
          height: 23.4rem;
        }

        div {
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          padding: 1.2rem;

          svg {
            display: initial;
            color: ${props => props.theme.colors.background};
            width: 1.6rem;
            height: 1.6rem;
          }
        }
      }
    }
  }
`

export const Actuation = styled.div`
  background: ${props => props.theme.colors.primary};
`
export const Members = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  gap: 4.8rem;
  max-width: 1032px;
  color: ${props => props.theme.colors.primary};

  > span {
    align-self: center;
  }

  @media only screen and (max-width: 900px) {
    max-width: 280px;
    > h3 {
      font-size: 32px;
    }
  }
`
export const AboutUs = styled.div`
  background: ${props => props.theme.colors.primary};
`
export const Footer = styled.div``
