import styled, { css } from 'styled-components'

interface TextAreaProps {
  isErrored: boolean
}

export const BodyTextarea = styled.textarea<TextAreaProps>`
  ${props =>
    props.isErrored &&
    css`
      box-shadow: 0 0 2px 2px ${props => props.theme.colors.error};
    `}

  width: 100%;
  height: 5.6rem;
  background: ${props => props.theme.colors.inputBackground};
  min-width: 10rem;
  margin: 0.3rem 0;
  position: relative;
  border-radius: ${props => props.theme.variables.borderRadius}rem;
  border: 0;
  width: 100%;
  min-height: 128px;
  max-height: 400px;
  margin: 0.2rem 0 0.8rem 0;
  padding: 0.6rem 1.2rem;
  outline: 0;
  font: 400 1.6rem Ubuntu;
  resize: vertical;
  &:focus {
    box-shadow: 0 0 1px 1px ${props => props.theme.colors.inputHighlight};
  }
  &[error] {
    box-shadow: 0 0 1px 1px red;
  }
  & + & {
    margin-top: 1.4rem;
  }
`
