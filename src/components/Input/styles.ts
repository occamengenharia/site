import styled, { css } from 'styled-components'

import { InputContainerProps } from './types'

export const InputContainer = styled.div<InputContainerProps>`
  background: ${props => props.theme.colors.neutral70};
  border-radius: 0.8rem;

  font-size: 2.4rem;

  padding: 2.4rem;
  width: 100%;

  display: flex;
  align-items: center;

  transition: box-shadow 200ms ease-in-out;

  & + div {
    margin-top: 2.4rem;
  }

  ${props =>
    props.isErrored &&
    css`
      /* Borda interna */
      box-shadow: 0px 0px 0px 2px ${props =>
        props.theme.colors.warning90}; inset;
    `}

  ${props =>
    props.isFocused &&
    css`
      /* Borda interna */
      box-shadow: 0px 0px 0px 2px ${props =>
        props.theme.colors.primary90}; inset;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${props => props.theme.colors.neutral15};
    `}

  input {
    flex: 1;
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
      font-weight: 500;
      color: ${props => props.theme.colors.neutral15};
    }
  }
`
