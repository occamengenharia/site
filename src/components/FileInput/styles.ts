import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  margin-top: 1.6rem;
  div {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
    width: 100%;
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
  width: 100%;
  margin: 0.2rem 0;
  margin: 0.2rem 0 0.8rem 0;
  outline: 0;
  font: 400 1.6rem Ubuntu;
  &[error] {
    box-shadow: 0 0 1px 1px red;
  }
`
