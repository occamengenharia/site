import styled, { css } from 'styled-components'
interface HeaderProps {
  hasSelectiveProcess: boolean
}

export const Main = styled.header<HeaderProps>`
  height: 8rem;
  display: flex;

  .inactive {
    ${props =>
      !props.hasSelectiveProcess &&
      css`
        cursor: not-allowed;
        pointer-events: none;
        color: ${props => props.theme.colors.disabled} !important;
      `}
  }

  top: 0;
  z-index: 4;
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    position: initial;
    height: 15.6rem;
  }
`

interface MenuProps {
  openMenu: boolean
}

export const HeaderContent = styled.section<MenuProps>`
  padding: 1.6rem;
  margin: 0 auto;
  margin-bottom: 5.6rem;
  width: 100vw;
  max-width: 1032px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  overflow: hidden;

  img {
    height: 3.6rem;
    cursor: pointer;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    section {
      a {
        padding: 1.6rem 0;
        width: 100%;
        border-bottom: 1px solid ${({ theme }) => theme.colors.borderDivision};
        color: ${({ theme }) => theme.colors.links};
        font-size: 1.6rem;
        transition: ${props => props.theme.variables.transition}s;

        &:hover {
          color: ${({ theme }) => theme.colors.linksHover};
        }
      }

      ${({ openMenu }) =>
        openMenu
          ? css`
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              position: absolute;
              left: 0;
              bottom: -284px;
              padding: 1.6rem 2.4rem;
              background-color: ${({ theme }) =>
                theme.colors.backgorudElevation};

              border-top: 1px solid
                ${({ theme }) => theme.colors.borderDivision};
              border-bottom: 1px solid
                ${({ theme }) => theme.colors.borderDivision};
            `
          : css`
              display: none;
            `}
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    img {
      height: 4.8rem;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    img {
      height: 6rem;
    }

    div {
      section {
        position: initial;
        display: initial;
        flex-direction: row;
        align-items: center;
        margin-right: 1.6rem;
        padding: 0;
        background: none;
        border: none;

        a {
          border: none;
          width: initial;

          & + a {
            margin-left: 3.2rem;
          }
        }
      }
    }
  }
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.neutral70};
`

export const ThemeSwitchButton = styled.button`
  background-color: ${props => props.theme.colors.inputBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  padding: 0.8rem;
  border-radius: 50%;
  box-shadow: none;
  border: 0;
  margin: 0 2.4rem 0 2.4rem;
  transition: ${props => props.theme.variables.transition}s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.details};
  }

  svg {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const Burguer = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.primary};

  svg {
    font-size: 2.4rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    display: none;
  }
`
