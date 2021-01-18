import styled, { css } from 'styled-components'

import Tooltip from '../Tooltip'

interface SelectProps {
  isField: boolean
  isFocused: boolean
  isErrored: boolean
}

export const Container = styled.div<SelectProps>`
  margin-top: 1.6rem;
  display: flex;
  align-items: center;
  padding-right: 1.6rem;
  padding-left: 0.8rem;
  border-radius: ${props => props.theme.variables.borderRadius}rem;
  background: ${props => props.theme.colors.inputBackground};
  & + div {
    margin-top: 2.4rem;
  }

  ${props =>
    props.isErrored &&
    css`
      box-shadow: 0 0 2px 2px ${props => props.theme.colors.error};
    `}

  ${props =>
    props.isFocused &&
    css`
      box-shadow: 0 0 2px 2px ${props => props.theme.colors.inputHighlight};
    `}
  ${props =>
    props.isField &&
    css`
      color: ${props => props.theme.colors.inputHighlight};
    `}

  .react-select-container {
    width: 100%;
    min-width: 10rem;
    position: relative;
    text-align: left;
    .react-select__control {
      background: transparent;
      border: none;
      box-shadow: none;
      .react-select__value-container {
        height: 6.4rem;
        .react-select__input {
          font: 400 16px Ubuntu;
        }

        font-size: 2.5rem;
      }
    }
    .react-select__menu {
      .react-select__menu-list {
        font-size: 2.5rem;
        .react-select__option {
          margin-left: 0;
        }
      }
    }
  }
`

export const Error = styled(Tooltip)`
  display: none;
  svg {
    margin-left: 0.8rem;
  }
  span {
    background: ${props => props.theme.colors.error};
    color: #fff;
    &::before {
      border-color: ${props => props.theme.colors.error} transparent;
    }
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.sm}px) {
    display: initial;
  }
`
