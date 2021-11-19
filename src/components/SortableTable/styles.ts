import styled, { css } from 'styled-components'

interface IThProps {
  cursorDefault?: boolean
  arrowDown?: boolean
  arrowVisible?: boolean
}
/**
 * @param cursorDefault boolean
 */
export const Th = styled.th<IThProps>`
  padding: 1.2rem 0 1.2rem 2.2rem;
  text-align: start;
  border-bottom: 2px solid ${props => props.theme.colors.borderDivision};
  cursor: ${props => (props.cursorDefault ? 'default' : 'pointer')};
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.titles};
  white-space: nowrap;
  transition: all ${({ theme }) => theme.variables.transition}s;
  width: auto;
  > svg {
    vertical-align: middle;
    margin-left: 0.4rem;
    font-size: 2.2rem;
    ${props =>
      props.arrowDown &&
      css`
        -moz-transform: scaleY(-1);
        -o-transform: scaleY(-1);
        -webkit-transform: scaleY(-1);
        transform: scaleY(-1);
      `}
    ${props =>
      props.arrowVisible
        ? css`
            visibility: visible;
            opacity: 1;
          `
        : css`
            visibility: hidden;
            opacity: 0;
          `};
  }
`
export const DivContainer = styled.div`
  width: 100%;
  scroll-snap-type: x proximity;
  overflow-x: auto;
  > table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    > tbody {
      > tr {
        transition: all ${({ theme }) => theme.variables.transition}s;
        &:nth-child(odd) {
          background: ${props => props.theme.colors.backgorudElevation};
        }
        > td {
          padding: 1.2rem 0 1.2rem 2.2rem;
          scroll-snap-align: start;
          font-weight: 400;
        }
      }
    }
  }
`
