import styled, { css } from 'styled-components'

import Tooltip from '../Tooltip'
interface ContainerProps {
  isFocused: boolean
  isField: boolean
  isErrored: boolean
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  margin-top: 1.6rem;
  background: ${props => props.theme.colors.inputBackground};
  border-radius: ${props => props.theme.variables.borderRadius}rem;

  display: flex;
  align-items: center;
  padding: 0 1.6rem;

  ${props =>
    props.isErrored &&
    css`
      box-shadow: 0 0 2px 2px ${props => props.theme.colors.error};
    `}
  ${props =>
    props.isFocused &&
    css`
      box-shadow: 0 0 2px 2px ${props => props.theme.colors.inputHighlight};
    `}
  ${props =>
    props.isField &&
    css`
      color: ${props => props.theme.colors.inputHighlight};
    `}
`

export const PlaceHolder = styled.div`
  z-index: 1;
  width: 100%;
  position: absolute;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 6.4rem;
  min-width: 10rem;
  width: 80%;

  label {
    text-align: left;
    color: ${props => props.theme.colors.text2};
    font: 400 1.6rem Ubuntu;
  }
`

export const BodyInput = styled.input`
  cursor: pointer;
  -moz-opacity: 0;
  opacity: 0;
  z-index: 2;

  height: 5.6rem;
  min-width: 10rem;
  margin: 0.3rem 0;
  position: relative;
  border: 0;
  width: 100%;
  outline: 0;
`

export const Error = styled(Tooltip)`
  display: none;

  svg {
    margin: 0;
  }
  span {
    background: ${props => props.theme.colors.error};
    color: #fff;
    &::before {
      border-color: ${props => props.theme.colors.error} transparent;
    }
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.sm}px) {
    display: initial;
  }
`
