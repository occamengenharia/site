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

  & + div {
    margin-top: 2.4rem;
  }

  &:hover {
    background: ${props => props.theme.colors.neutral60};
  }

  ${props =>
    props.isErrored &&
    css`
      /* Borda interna */
      box-shadow: 0px 0px 0px 2px ${props => props.theme.colors.warning90} inset;

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
        font-weight: 100;
      }
    `}

  ${props =>
    props.isFilled &&
    css`
      ${Placeholder} {
        top: 2px;
        font-size: 1.2rem;
        font-weight: 100;
      }
    `}

  input {
    background: transparent;
    border: 0;

    color: ${props => props.theme.colors.neutral15};

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
  }
`

export const Placeholder = styled.p`
  position: absolute;
  top: 25%;
  left: 8px;

  font-weight: 500;
  font-size: 1.6rem;

  color: ${props => props.theme.colors.neutral15} !important;

  transition-property: font-size top;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;

  cursor: text;
`
