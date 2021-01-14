import styled, { css } from 'styled-components'
interface BodyInputProps {
  isErrored: boolean
}

export const BodyInput = styled.input<BodyInputProps>`
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  ${props =>
    props.isErrored &&
    css`
      box-shadow: 0 0 2px 2px ${props => props.theme.colors.error};
    `}

  background: ${props => props.theme.colors.inputBackground};
  width: 100%;
  height: 5.6rem;
  min-width: 10rem;
  padding: 0.6rem 1.2rem;
  margin-top: 1.6rem;
  position: relative;
  border-radius: ${props => props.theme.variables.borderRadius}rem;
  border: 0;
  width: 100%;
  outline: 0;
  font: 400 1.6rem Ubuntu;
  &:focus {
    box-shadow: 0 0 2px 2px ${props => props.theme.colors.inputHighlight};
  }
  &[error] {
    box-shadow: 0 0 1px 1px red;
  }
  & + & {
    margin-top: 1.6rem;
  }
`
