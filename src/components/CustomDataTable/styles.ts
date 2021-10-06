import styled, { css } from 'styled-components'
interface IIconProps {
  arrowDown?: boolean
}
/**
 * @param cursorDefault boolean
 */
export const SpanIcon = styled.th<IIconProps>`
  width: 2rem;
  padding: 0 0.8rem;
  > svg {
    ${props =>
      props.arrowDown &&
      css`
        -moz-transform: scaleY(-1);
        -o-transform: scaleY(-1);
        -webkit-transform: scaleY(-1);
        transform: scaleY(-1);
      `}
  }
`
interface IThProps {
  cursorDefault?: boolean
  arrowDown?: boolean
  arrowVisible?: boolean
}
/**
 * @param cursorDefault boolean
 */
export const Th = styled.th<IThProps>`
  padding: 1.2rem 2.2rem;
  text-align: start;
  border-bottom: 2px solid ${props => props.theme.colors.borderDivision};
  cursor: ${props => (props.cursorDefault ? 'default' : 'pointer')};
  text-justify: center;
  background: ${props => props.theme.colors.background};
  transition: all ${({ theme }) => theme.variables.transition}s;
  word-break: normal;
  width: fit-content;
  > button {
    color: ${({ theme }) => theme.colors.titles};
    display: flex;
    align-items: center;
    border: none;
    cursor: ${props => (props.cursorDefault ? 'default' : 'pointer')};
    background: transparent;
    font-size: 1.6rem;
    font-weight: bold;
    width: 100%;
  }
  > svg {
    ${props =>
      props.arrowDown &&
      css`
        -moz-transform: scaleY(-1);
        -o-transform: scaleY(-1);
        -webkit-transform: scaleY(-1);
        transform: scaleY(-1);
      `}
  }
`
export const DivContainer = styled.div`
  width: 100%;
  scroll-snap-type: x proximity;
  overflow-x: auto;
  > table {
    border-collapse: collapse;
    > tbody {
      > tr {
        transition: all ${({ theme }) => theme.variables.transition}s;
        &:nth-child(odd) {
          background: ${props => props.theme.colors.backgorudElevation};
        }

        > td {
          padding: 1.2rem 2.2rem;
          scroll-snap-align: start;
          font-weight: 400;
        }
      }
    }
  }
`
