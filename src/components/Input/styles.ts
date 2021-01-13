import styled, { keyframes } from 'styled-components'

const movePlaceholder = keyframes`
  from{
    transform: translateX(100%)
  }

  to{
    transform: translateX(-130%)
  }
`

export const BodyInput = styled.input`
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
  background: ${props => props.theme.colors.inputBackground};
  width: 100%;
  height: 5.6rem;
  min-width: 10rem;
  margin: 0.3rem 0;
  padding: 0.6rem 1.2rem;
  position: relative;
  border-radius: ${props => props.theme.variables.borderRadius}rem;
  border: 0;
  width: 100%;
  margin: 0.2rem 0;
  margin: 0.2rem 0 0.8rem 0;
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

  ::placeholder {
    animation: movePlaceholder 12s linear infinite paused;
  }
`
