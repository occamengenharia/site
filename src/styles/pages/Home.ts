import styled, { keyframes } from 'styled-components'

export const Page = styled.div`
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  height: 100vh;
  overflow-y: scroll;
  > div {
    scroll-snap-align: end;
    height: 100%;
    position: relative;
    &:nth-child(even) {
     
    }
  }
  #footer {
    scroll-snap-type: y none;
    scroll-snap-align: end;
    height: fit-content;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.lg}px) {
    #footer {
      height: 100%;
    }
  }
`

export const Initial = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    width: min(1100px, 90vw);
    h1 {
      font-size: 4.8rem;
      text-align: center;
      margin-bottom: 4.8rem;
      color: ${props => props.theme.colors.titles};
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
    }
  }
`

export const Actuation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.primaryGradient0_100};
  @media (max-width: ${props => props.theme.breakpoints.lg}px) {
    height: 170% !important;
  }
  aside {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    position: relative;
    margin-bottom: 0rem;
    > div {
      > h3 {
        margin-top: 15rem;
        color: ${props => props.theme.colors.white};
      }
      > button {
        margin-top: 15rem;
        background: white;
        color: ${props => props.theme.colors.secundary};
        span {
          color: ${props => props.theme.colors.secundary};
        }
      }
    }
    @media (max-width: ${props => props.theme.breakpoints.lg}px) {
      margin-top: 30rem;
      margin-bottom: 0rem;
      flex-direction: column;
      align-items: center;
      > div {
        > h3 {
          margin-top: -30rem;
          color: ${props => props.theme.colors.white};
        }
        > button {
          margin-top: -23rem;
          width: 30rem;
          background: white;
          color: ${props => props.theme.colors.secundary};
          span {
            color: ${props => props.theme.colors.secundary};
          }
        }
      }
    }
  }
  > main {
    height: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8%;
    width: min(1100px, 90vw);
    h3 {
      color: ${props => props.theme.colors.white};
    }
    > section {
      display: flex;
      align-items: start;
      justify-content: center;
      background-color: #014BB4;
      border-radius: 1rem;
      padding: 2rem;
      width: 38rem;
      height: 100%;
      gap: 1.2rem;
      h3 {
        font-size: 32px;
        gap: 0rem !important;
      }
      p {
        font-size: 1.2rem;
        color: ${props => props.theme.colors.white};
        line-height: 1.6rem;
      }
      img {
        height: 10rem !important;
      }
    }
    button {
      background: white;
      color: ${props => props.theme.colors.secundary};
      span {
        border-left: solid 1px ${props => props.theme.colors.secundary};
        color: ${props => props.theme.colors.secundary};
      }
    }
    @media (min-width: ${props => props.theme.breakpoints.lg}px) {
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
          height: 20rem;
        }
        p {
          font-size: 1.6rem;
          line-height: 2rem;
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
      button {
        grid-column: 3;
        grid-row: 3;
      }
    }
    @media (max-width: ${props => props.theme.breakpoints.lg}px) {
     > section {
        flex-direction: column;
        gap: 4rem;
        img {
          height: 20rem;
        }
        p {
          font-size: 1.6rem;
          line-height: 2rem;
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
        div {
          display: flex;
          align-items: center;
          h3 {
            margin-left: 3rem;
          }
        }
      }
    }
  }
`
export const Members = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: min(1100px, 90vw);
  margin: 0 auto;
  gap: 4vh;

  h3 {
    color: ${props => props.theme.colors.titles};
  }

  a {
    font-size: 1.6rem;
    color: ${props => props.theme.colors.subtitles};

    svg {
      margin-left: 0.8rem;
    }
  }
  p {
    font-size: 2rem;
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    align-items: flex-start;

    a {
      font-size: 1.2rem;
      margin: 0 auto;
    }
    p {
      font-size: 4rem;
    }
  }
`

export const About = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  justify-content: space-between;

  div {
    align-items: flex-start;
  }
  span {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  img {
    display: none;
  }

  svg {
    font-size: 0.8rem;
  }

  p {
    font-size: 2.4rem;
    margin-top: 15.1rem;
    margin-bottom: 0rem;
    margin-left: 20.3rem;
    width: 346px;
    height: 143px;
  }

  h4 {
    font-size: 4.8rem;
    margin-top: 9.6rem;
    margin-bottom: 0rem;
    margin-left: 20.3rem;
  }
  span {
    font-size: 2.4rem;
    margin-bottom: 14.3rem;
    width: 27.2rem;
    height: 19.6rem;
  }
  a {
    color: ${props => props.theme.colors.white};
    font-size: 1.6rem;
  }
  button {
    width: 15rem;
    background: white;
    margin-top: 10.4rem;
    margin-bottom: 0rem;
    margin-left: 20.4rem;
    color: ${props => props.theme.colors.secundary};
    span {
      font-size: 1.8rem;
      margin-top: 13.5rem;
      margin-bottom: 0rem;
      padding: 2rem;
      color: ${props => props.theme.colors.secundary};
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div {
      align-items: flex-start;
    }
    span {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    h4 {
      font-size: 4.8rem;
      margin-top: 9.6rem;
      margin-bottom: 0rem;
      margin-left: 20.3rem;
    }
    span {

    }
    p {
      font-size: 2.4rem;
      margin-top: 15.1rem;
      margin-bottom: 0rem;
      margin-left: 20.3rem;
      width: 346px;
      height: 143px;
    }
    a {
      font-size: 1.2rem;
      margin-top: 10.4rem;
      margin-bottom: 0rem;
      margin-left: 20.4rem;
    }
    img {
      display: initial;
      position: relative;
      height: 100vh;
      object-fit: cover;
    }
    
    button {
      width: 15rem;
      background: white;
      margin-top: 10.4rem;
      margin-bottom: 0rem;
      margin-left: 20.4rem;
      color: ${props => props.theme.colors.secundary};
      span {
        font-size: 1.8rem;
        margin-top: 13.5rem;
        margin-bottom: 0rem;
        padding: 2rem;
        color: ${props => props.theme.colors.secundary};
      }
    }

    aside {
      position: relative;

      div {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        mix-blend-mode: hard-light;
      }
    }
  }
`

export const SectionFooter = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    justify-content: space-between;
  }
`

const animation = keyframes`
  0% {
      transform: translate(0, 0);
    }
    100% {
    transform: translate(-100%, 0);
  }
  `

export const Marquee = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.colors.primary};
  padding: 3.2rem 0;
  div {
    display: flex;
    flex-direction: column;
    max-height: 10rem;
    max-width: 103.2rem;
    h1 {
      font-size: 32px;
      color: ${props => props.theme.colors.white};
    }
    a {
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        background: transparent;
        font-size: 1.2rem;
        color: ${props => props.theme.colors.white};
        svg {
          color: ${props => props.theme.colors.white};
          font-size: 1.2rem;
        }
      }
    }
  }
  aside {
    margin: 0 auto;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    section {
      display: inline-block;
      padding-left: 100%;
      animation: ${animation} 15s linear infinite;
      img {
        width: 18rem;
        height: 10rem;
        & + img {
          margin-left: 6.8rem;
        }
      }
    }
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    div {
      align-items: flex-start;
      width: 100%;
    }

    aside {
      section {
        img + img {
          margin-left: 20rem;
        }
      }
    }
  }
`
