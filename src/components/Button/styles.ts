import styled, { css } from 'styled-components'
import { ButtonColors, ButtonSizes, ButtonVariants } from './types'

interface ButtonStyleProps {
  variant?: ButtonVariants
  color?: ButtonColors
  size?: ButtonSizes
}

export const Main = styled.button<ButtonStyleProps>`
  font-size: 1.6rem;
  width: 100%;
  background: none;
  border: none;
  border-radius: 0.8rem;
  text-transform: uppercase;
  padding: 1.6rem 4.8rem;
  cursor: pointer;

  span {
    font-weight: bold;
  }

  ${props =>
    props.variant === 'contained' &&
    css`
      ${props.color === 'primary' &&
      css`
        background: ${({ theme }) => theme.colors.primaryGradient90_0};
        color: ${({ theme }) => theme.colors.neutral100};

        &:hover {
          background: ${({ theme }) => theme.colors.primaryGradient100_0};
        }

        &:active {
          background: ${({ theme }) => theme.colors.primary80};
        }
      `}

      ${props.color === 'secondary' &&
      css`
        background: ${({ theme }) => theme.colors.neutral100};
        color: ${({ theme }) => theme.colors.primary90};

        &:hover {
          background: ${({ theme }) => theme.colors.neutral80};
        }

        &:active {
          background: ${({ theme }) => theme.colors.neutral70};
        }
      `}

      ${props.color === 'warning' &&
      css`
        background: ${({ theme }) => theme.colors.warningGradient90_0};
        color: ${({ theme }) => theme.colors.neutral100};

        &:hover {
          background: ${({ theme }) => theme.colors.warningGradient100_0};
        }

        &:active {
          background: ${({ theme }) => theme.colors.warning80};
        }
      `}

      ${props.color === 'disabled' &&
      css`
        background: ${({ theme }) => theme.colors.neutral30};
        color: ${({ theme }) => theme.colors.neutral100};
        cursor: not-allowed;
      `}
    `}

  @media only screen and (min-width: ${props => props.theme.breakpoints.sm}px) {
    width: fit-content;

    ${props =>
      props.size === 'large' &&
      css`
        padding: 2.4rem 4.8rem;
      `}

    ${props =>
      props.size === 'small' &&
      css`
        padding: 1.6rem 4.8rem;
      `}
  }
`
