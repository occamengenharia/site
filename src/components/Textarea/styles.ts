import styled, { css } from 'styled-components'

import Tooltip from '../Tooltip'
interface ContainerProps {
  isFocused: boolean
  isField: boolean
  isErrored: boolean
}

export const Container = styled.div<ContainerProps>`
  background: ${props => props.theme.colors.inputBackground};
  border-radius: 0.8rem;
  outline: 0;
  font-size: 2.4rem;
  width: 100%;
  display: flex;
  padding: 1.6rem;
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

  textarea {
    flex: 1;
    min-height: 12.8rem;
    resize: none;
    background: transparent;
    border: 0;
    font: 400 1.6rem Ubuntu;

    &[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    &[type='number'] {
      -moz-appearance: textfield;
      appearance: textfield;
    }

    &[error] {
      box-shadow: 0 0 1px 1px red;
    }

    & + & {
      margin-top: 1.6rem;
    }

    &::placeholder {
      color: ${props => props.theme.colors.text2};
    }
  }
`

export const Error = styled(Tooltip)`
  display: none;
  height: 2rem;
  margin-left: 1.6rem;
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
