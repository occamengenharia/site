import styled, { css } from 'styled-components'
interface IPropsTr {
  isSelected: boolean
}
export const Tr = styled.tr<IPropsTr>`
  height: 6.4rem;
  cursor: pointer;
  ${props =>
    props.isSelected &&
    css`
      ${SmallBox} {
        background: ${props => props.theme.colors.backgorudElevationDark};
      }
      background: ${props =>
        props.theme.colors.secundaryBakgorudElevation} !important;
      color: ${props => props.theme.colors.white};
    `}
`
interface IPropsSmallBox {
  podium?: 1 | 2 | 3
}
export const SmallBox = styled.span<IPropsSmallBox>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.4rem;
  height: 4rem !important;
  width: 4rem;
  background: ${props => props.theme.colors.backgorudElevation};
  border-radius: ${props => props.theme.variables.borderRadius}rem;
  ${props =>
    props.podium === 1
      ? css`
          background: linear-gradient(
            180deg,
            #fcc201 0%,
            #dba514 100%
          ) !important;
          color: ${props => props.theme.colors.white};
        `
      : props.podium === 2
      ? css`
          background: linear-gradient(
            180deg,
            #b4b9be 0%,
            #8d8c8f 100%
          ) !important;
          color: ${props => props.theme.colors.white};
        `
      : props.podium === 3 &&
        css`
          background: linear-gradient(
            180deg,
            #d9af47 0%,
            #c38224 99.48%
          ) !important;
          color: ${props => props.theme.colors.white};
        `}
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  main {
    width: min(85vw, 500px);
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    justify-content: center;
    align-items: center;
    > h3 {
      margin-top: 2rem;
      width: 100%;
      text-align: start;
    }
    @media (min-width: ${props => props.theme.breakpoints.md}px) {
      width: min(90vw, 1000px);
    }
  }
`
