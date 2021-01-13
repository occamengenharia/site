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

  width: 100%;
  height: 5.6rem;

  &[error] {
    box-shadow: 0 0 1px 1px red;
  }
`
