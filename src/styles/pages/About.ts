import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > main {
    margin: 6rem 0 4rem;
    width: min(90vw, 1100px);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 6rem;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
      text-align: start;
      h2,
      h3 {
        align-self: flex-start;
      }
    }
  }
`
export const MVV = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  > button {
    width: 100%;
    border: 0;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${({ theme }) => theme.variables.borderRadius}rem;
    text-align: center;
    margin-bottom: 2rem;
    gap: 1.2rem;
    padding: 1.2rem;
    transition: ${({ theme }) => theme.variables.transition}s;
    > span {
      transition: ${({ theme }) => theme.variables.transition}s;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 8rem;
      border-radius: 50%;
      width: 9rem;
      height: 9rem;
      border: solid 0.5rem ${({ theme }) => theme.colors.secundary};
      background: ${({ theme }) => theme.colors.background};
      flex: none;
      hr {
        border: 0;
        position: absolute;
        z-index: -3;
        width: 0.5rem;
        height: 7rem;
        background: ${({ theme }) => theme.colors.secundary};
        left: calc(50% - 0.5rem / 2);
        bottom: -7rem;
      }
    }

    > aside {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      width: 50%;
      align-items: center;
      justify-content: center;
      padding-right: 1rem;
      > legend {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.colors.inputHighlight};
      }
      > p {
        display: none;
        font-size: 1rem;
      }
    }
    &:focus {
      align-self: flex-start;
      background: ${({ theme }) => theme.colors.primary};
      > span {
        background: ${({ theme }) => theme.colors.secundary};
      }
      legend,
      p,
      svg {
        color: ${({ theme }) => theme.colors.white};
      }
      p {
        display: initial;
      }
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    display: grid;
    grid-template-columns: repeat(3, calc(100% / 3));
    grid-gap: 1.2rem;
    align-items: flex-start;
    button {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      aside {
        width: 100%;
        legend {
          font-size: 2.4rem;
        }
        p {
          font-size: 1.6rem;
        }
      }
      span {
        hr {
          right: 0;
          top: 50%;
          width: min(35rem, 30vw);
          height: 0.5rem;
        }
      }
    }
  }
`

export const Stories = styled.div`
  position: relative;
  width: 100%;
  > section {
    height: 35rem;
    width: 100%;
    text-align: center;
    flex: none;
    padding: 2rem 0;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    > main {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr auto;
      grid-gap: 1.2rem;
      > img {
        border-radius: ${({ theme }) => theme.variables.borderRadius}rem;
        width: 100%;
        object-fit: cover;
        height: 22rem;
        grid-row: 1;
        &:not(.img-main) {
          display: none;
        }
      }
      > p {
        grid-column: 1;
        grid-row: 2;
        border-left: solid 2px ${({ theme }) => theme.colors.text2};
        border-right: solid 2px ${({ theme }) => theme.colors.text2};
      }
    }
    > aside {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto;
      grid-gap: 1.2rem;
      padding: 0 1.2rem;
      > span {
        font: 700 2rem Ubuntu;
        color: ${({ theme }) => theme.colors.text};
        cursor: pointer;
        border: 0;
        background: transparent;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        color: ${({ theme }) => theme.colors.text2};
        transition: 0.5s;
        &:nth-of-type(1) {
          display: none;
        }
        &:nth-of-type(2) {
          grid-column: 1;
        }
        &:nth-of-type(3) {
          font: 700 3rem Ubuntu;
          cursor: initial;
          padding: 0.2rem 0;
          color: ${({ theme }) => theme.colors.inputHighlight};
          grid-column: 2;
        }
        &:nth-of-type(4) {
          grid-column: 3;
        }
        &:nth-of-type(5) {
          display: none;
        }
        :focus {
          color: black;
        }
      }
    }
  }
  > svg {
    font-size: 3.2rem;
    cursor: pointer;
    position: absolute;
    z-index: 100;
    bottom: 0;
    right: 0;
    color: ${({ theme }) => theme.colors.text2};
    :nth-of-type(1) {
      left: 0;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    display: flex;
    justify-content: center;

    > section {
      height: 50rem;
      > main {
        grid-template-columns: 1fr 1.2fr 1fr;
        grid-template-rows: 1fr auto;
        > img {
          grid-row: 1;
          width: 100%;
          height: min(18vw, 22rem);
          &.img-left,
          &.img-right {
            display: initial;
            opacity: 0.5;
            filter: grayscale(60%);
            height: min(12vw, 20rem);
            align-self: center;
            cursor: pointer;
          }
          &.img-left {
            grid-column: 1;
          }
          &.img-main {
            grid-column: 2;
          }
          &.img-right {
            grid-column: 3;
          }
        }
        > p {
          grid-column: 2;
        }
      }
      > aside {
        grid-template-columns: repeat(5, 1fr);
        width: 100%;
        span {
          &:nth-of-type(1) {
            display: flex;
            grid-column: 1;
          }
          &:nth-of-type(2) {
            grid-column: 2;
            padding-bottom: 0.6rem;
          }
          &:nth-of-type(3) {
            grid-column: 3;
            padding-bottom: 0.8rem;
          }
          &:nth-of-type(4) {
            grid-column: 4;
            padding-bottom: 0.6rem;
          }
          &:nth-of-type(5) {
            grid-column: 5;
            display: flex;
          }
        }
      }
    }
  }
`
