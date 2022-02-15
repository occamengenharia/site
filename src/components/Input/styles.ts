import styled, { css } from 'styled-components'

import { InputContainerProps } from './types'

export const InputContainer = styled.div<InputContainerProps>`
  background: ${props => props.theme.colors.inputBackground};
  border-radius: 0.8rem;
  outline: 0;
  font-size: 2.4rem;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 1.6rem;
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
    props.isFilled &&
    css`
      color: ${props => props.theme.colors.inputHighlight};
    `}

  input {
    flex: 1;
    height: 6.4rem;
    background: transparent;
    border: 0;

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
