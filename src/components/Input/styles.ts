import styled, { css } from 'styled-components'

import { InputContainerProps } from './types'

export const InputContainer = styled.div<InputContainerProps>`
  background: ${props => props.theme.colors.neutral70};
  border-radius: 0.8rem;

  font-size: 2.4rem;

  padding: 0 2.4rem;
  width: 100%;

  display: flex;
  align-items: center;
  position: relative;

  transition-property: box-shadow background;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;

  cursor: text;

  &:hover {
    background: ${props => props.theme.colors.neutral60};
  }

  ${props =>
    props.isErrored &&
    css`
      /* Borda interna */
      box-shadow: 0px 0px 0px 2px ${props => props.theme.colors.warning90} inset;
      margin-bottom: 3rem;

      ${Placeholder} {
        color: ${props => props.theme.colors.warning90} !important;
      }
    `}

  ${props =>
    props.isFocused &&
    css`
      /* Borda interna */
      box-shadow: 0px 0px 0px 2px ${props => props.theme.colors.primary90} inset;

      ${Placeholder} {
        color: ${props => props.theme.colors.primary100} !important;
        top: 2px;
        font-size: 1.2rem;
        font-weight: 400;
      }
    `}

  ${props =>
    props.isFilled &&
    css`
      ${Placeholder} {
        top: 2px;
        font-size: 1.2rem;
        font-weight: 400;
      }
    `}

  input {
    background: transparent;
    border: 0;

    color: ${props => props.theme.colors.neutral15} !important;

    padding: 2.4rem 0;
    width: 100%;

    &[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    &[type='number'] {
      -moz-appearance: textfield;
      appearance: textfield;
    }

    & + & {
      margin-top: 1.6rem;
    }

    &:active {
      background: transparent;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-background-clip: text;
      -webkit-text-fill-color: ${props => props.theme.colors.neutral15};
    }
  }
`

export const Placeholder = styled.div`
  position: absolute;
  top: 25%;
  left: 8px;

  margin: 8px 0 96px 16px;

  font-size: 1.6rem;
  font-weight: 400 !important;

  color: ${props => props.theme.colors.neutral15} !important;

  transition-property: font-size top;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;

  cursor: text;
`

export const ErrorMessage = styled.p`
  position: absolute;
  left: 0;
  bottom: -2.8rem;
  left: 2.4rem;
  font-size: 1.6rem !important;
  color: ${props => props.theme.colors.warning90} !important;
`
