import styled from 'styled-components'

export const BodyInput = styled.input`
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
  width: 100%;
  min-width: 10rem;
  margin: 0.3rem 0;
  padding: 0.6rem 1.2rem;
  position: relative;
  border-radius: ${props => props.theme.variables.borderRadius}rem;
  border: 0;
  width: 100%;
  height: 38px;
  margin: 0.2rem 0;
  margin: 0.2rem 0 0.8rem 0;
  outline: 0;
  font: 400 1.6rem Ubuntu;
  &:focus {
    box-shadow: 0 0 1px 1px ${props => props.theme.colors.primary};
  }
  &[error] {
    box-shadow: 0 0 1px 1px red;
  }
  & + & {
    margin-top: 1.4rem;
  }
`
