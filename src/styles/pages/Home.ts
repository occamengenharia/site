import styled, { keyframes } from 'styled-components'

export const Page = styled.div`
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  height: 100vh;
  overflow-y: scroll;
  > div {
    scroll-snap-align: end;
    height: 100vh;
    position: relative;
    &:nth-child(even) {
      background: ${props => props.theme.colors.primary};
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
  gap: 8%;
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    max-width: 27.2rem;
    h1 {
      font-size: 4.8rem;
      text-align: center;
      margin-bottom: 4.8rem;
      color: ${props => props.theme.colors.titles};
    }
    div {
      transition: all 0.5s;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.25);

      .arrows {
        cursor: pointer;
        transition: 0.2s all;
      }

      .arrows:hover {
        color: ${props => props.theme.colors.primary};
      }

      img {
        width: 27.2rem;
        height: 15.4rem;
        transition: 0.5s all;
      }
      div {
        background-color: ${props => props.theme.colors.secundary};
        width: 100%;
        padding: 0.8rem 0;

        span {
          color: ${props => props.theme.colors.white};
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
        transition: 0.2s all;
      }
      div {
        height: 26.6rem;

        img {
          width: 41.6rem;
          height: 23.4rem;
        }
        div {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          height: 3.2rem;
          padding: 1.2rem;
          svg {
            display: initial;
            color: ${props => props.theme.colors.white};
            width: 1.6rem;
            height: 1.6rem;
          }
        }
      }
    }
  }
`

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

    h3 {
      color: ${props => props.theme.colors.white};
    }
    > section {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.2rem;
      p {
        font-size: 1.2rem;
        text-align: justify;
        color: ${props => props.theme.colors.white};
      }
      img {
        height: 8rem;
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
          height: 20rem;
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
  @media only screen and (max-width: 991px) {
    max-width: 280px;
    > h3 {
      font-size: 32px;
    }
  }
`

export const About = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  color: ${props => props.theme.colors.white};

  img {
    display: none;
  }

  svg {
    font-size: 0.8rem;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h4 {
    font-size: 3.2rem;
    margin-bottom: 9.9rem;
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
  @media (min-width: ${props => props.theme.breakpoints.md}px) {
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

    aside {
      position: relative;

      div {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        background-color: ${props => props.theme.colors.primary};
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
    width: 100%;
    max-height: 10rem;
    max-width: 103.2rem;
    h1 {
      font-size: 32px;
      color: ${props => props.theme.colors.white};
    }
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
