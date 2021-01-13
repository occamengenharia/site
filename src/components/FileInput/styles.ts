import styled, { css } from 'styled-components'
interface InputProps {
  isErrored: boolean
}

export const Container = styled.div<InputProps>`
  position: relative;
  margin-top: 1.6rem;
  div {
    ${props =>
      props.isErrored &&
      css`
        box-shadow: 0 0 2px 2px ${props => props.theme.colors.error};
      `}

    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: ${props => props.theme.colors.inputBackground};
    height: 5.6rem;
    min-width: 10rem;
    padding: 0.6rem 1.2rem;
    border-radius: ${props => props.theme.variables.borderRadius}rem;
    width: 100%;

    label {
      color: ${props => props.theme.colors.text2};
      font: 400 1.6rem Ubuntu;
    }
  }
`

export const BodyInput = styled.input`
  cursor: pointer;
  -moz-opacity: 0;
  text-align: right;
  opacity: 0;
  z-index: 2;

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

  &[error] {
    box-shadow: 0 0 1px 1px red;
  }
`
