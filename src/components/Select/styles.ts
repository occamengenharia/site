import styled, { css } from 'styled-components'

import Tooltip from '../Tooltip'

interface SelectProps {
  isErrored: boolean
}

export const Container = styled.div<SelectProps>`
  margin-top: 1.6rem;
  display: flex;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      box-shadow: 0 0 2px 2px ${props => props.theme.colors.error};
    `}

  .react-select-container {
    width: 100%;
    min-width: 10rem;
    position: relative;
    outline: 0;
    .react-select__control {
      background: ${props => props.theme.colors.inputBackground};
      border-radius: ${props => props.theme.variables.borderRadius}rem;
      :focus-within {
        box-shadow: inherit 0 0 1px 1px ${props => props.theme.colors.error};
      }

      .react-select__value-container {
        height: 5.6rem;
        .react-select__input {
          font: 400 16px Ubuntu;
        }

        font-size: 2.5rem;
      }
      .react-select__indicators {
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
    margin: 0;
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
