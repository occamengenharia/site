import styled, { css } from 'styled-components'

import Tooltip from '../Tooltip'

interface ContainerProps {
  isFocused: boolean
  isField: boolean
  isErrored: boolean
}

export const Container = styled.div<ContainerProps>`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  border: 0.2rem solid #232129;
  padding: 1.6rem;
  width: 100%;
  color: ${props => props.theme.colors.text2};
  display: flex;
  & + div {
    margin-top: 2.4rem;
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: ${props => props.theme.colors.error};
    `}
  ${props =>
    props.isFocused &&
    css`
      color: ${props => props.theme.colors.secundary};
      border-color: ${props => props.theme.colors.secundary};
    `}
  ${props =>
    props.isField &&
    css`
      color: ${props => props.theme.colors.secundary};
    `}
  textarea {
    height: 12rem;
    resize: none;
    color: #f4ede8;
    font-size: 1.6rem;
    flex: 1;
    background: transparent;
    border: 0;
    &::placeholder {
      color: ${props => props.theme.colors.text2};
    }
  }
  svg {
    color: ${props => props.theme.colors.text2};
    margin-right: 1.6rem;
  }
`

export const Error = styled(Tooltip)`
  display: none;
  height: 2rem;
  margin-left: 1.6rem;
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
