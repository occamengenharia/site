import styled, { css } from 'styled-components'

export const Main = styled.header`
  position: sticky;
  height: 8rem;
  display: flex;

  top: 0;
  z-index: 4;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    position: initial;
    height: 15.6rem;
  }
`
export const HeaderContent = styled.section`
  position: initial;
  overflow-y: hidden;

  top: 0;
  padding-top: 45;
  z-index: 1;
  padding: 1.6rem;
<<<<<<< HEAD
  margin: 0 auto;
  margin-bottom: 5.6rem;
  width: 100vw;
  max-width: 1032px;
=======
  background: transparent;
>>>>>>> 08f5ec8f8f311f144c737ce83dd773889e7141a2
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  max-width: 120rem;
  margin: 0 auto;
  overflow: hidden;

  img {
    height: 3.6rem;
    cursor: pointer;
  }

  > div {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;

    button {
      background: transparent;
      border: 0;
      margin: 0 2.4rem 0 3.2rem;
      svg {
        color: ${({ theme }) => theme.colors.text};
        font-size: 2.4rem;
      }
    }
    section {
      display: none;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    img {
      height: 4.8rem;
    }

    > div {
      button {
        svg {
          font-size: 3.6rem;
        }
      }
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    position: initial;

    img {
      height: 6rem;
    }
    > div {
      flex-direction: row;

      section {
        display: flex;
        margin-right: 1.6rem;
        a {
          color: ${({ theme }) => theme.colors.text};
          align-items: center;
          font-size: 1.6rem;

          & + a {
            margin-left: 3.2rem;
          }
        }
      }
    }
  }
`
interface PropsBurguer {
  openMenu: boolean
}

export const Burguer = styled.div<PropsBurguer>`
  label {
    div {
      border-radius: 50%;
      width: 60px;
      height: 60px;

      span {
        position: relative;
        display: block;
        background: ${({ theme }) => theme.colors.text};

        width: 30px;
        height: 2px;
        top: 29px;
        left: 15px;
        transition: 0.5s ease-in-out;

        &:before,
        &:after {
          background: ${({ theme }) => theme.colors.text};
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          transition: 0.5s ease-in-out;
        }

        &:before {
          top: -10px;
        }

        &:after {
          bottom: -10px;
        }
      }
    }
  }

  input {
    display: none;
  }

  input:checked ~ label {
    div {
      span {
        transform: rotate(45deg);

        &:before {
          transform: rotate(90deg);
          top: 0;
        }
        &:after {
          transform: rotate(90deg);
          bottom: 0;
        }
      }
    }
  }
  .outside-menu {
    ${props =>
      props.openMenu
        ? css`
            display: flex;
          `
        : css`
            display: none;
          `}
    width:100vw;
    height: 100vh;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    background: transparent;
    .menu-links {
      position: fixed;
      background: ${({ theme }) => theme.colors.background};

      min-width: 100vw;
      box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.2);
      top: 80px;
      z-index: 2;
      border-top: solid 1px ${({ theme }) => theme.colors.borderDivision};
      /* padding: 1.2rem; */
      aside {
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        a {
          padding: 2.4rem 0 1.6rem 0;

          color: ${({ theme }) => theme.colors.text};

          display: initial;
          font-size: 1.6rem;

          & + a {
            padding: 1.6rem 0;
            border-top: 1px solid ${({ theme }) => theme.colors.borderDivision};
          }
        }

        padding: 0.8rem 0;
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    display: none;
  }
`
