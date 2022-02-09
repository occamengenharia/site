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
  outline: none;
  border-radius: 0.8rem;
  text-transform: uppercase;
  padding: 1.6rem 4.8rem;
  cursor: pointer;

  span {
    font-weight: bold;
  }

  transition: transform 100ms;
  &:hover {
    transform: scale(1.02);
  }
  &:active {
    transform: scale(0.95);
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

  ${props =>
    props.variant === 'outlined' &&
    css`
      background: none;
      ${props.color === 'primary' &&
      css`
        border: 1px solid ${({ theme }) => theme.colors.primary90};
        color: ${({ theme }) => theme.colors.primary90};

        &:hover {
          border: 1px solid ${({ theme }) => theme.colors.primary100};
          color: ${({ theme }) => theme.colors.primary100};
          background: rgba(7, 115, 198, 0.15);
        }

        &:active,
        &:focus {
          border: 1px solid ${({ theme }) => theme.colors.primary80};
          color: ${({ theme }) => theme.colors.primary80};
          background: rgba(14, 66, 139, 0.2);
        }
      `}

      ${props.color === 'secondary' &&
      css`
        border: 1px solid ${({ theme }) => theme.colors.neutral100};
        color: ${({ theme }) => theme.colors.neutral100};

        &:hover {
          border: 1px solid ${({ theme }) => theme.colors.neutral80};
          color: ${({ theme }) => theme.colors.neutral80};
          background: rgba(238, 238, 238, 0.2);
        }

        &:active,
        &:focus {
          border: 1px solid ${({ theme }) => theme.colors.neutral70};
          color: ${({ theme }) => theme.colors.neutral70};
          background: rgba(224, 224, 224, 0.4);
        }
      `}

      ${props.color === 'warning' &&
      css`
        border: 1px solid ${({ theme }) => theme.colors.warning90};
        color: ${({ theme }) => theme.colors.warning90};

        &:hover {
          border: 1px solid ${({ theme }) => theme.colors.warning100};
          color: ${({ theme }) => theme.colors.warning100};
          background: rgb(228, 91, 91, 0.15);
        }

        &:active,
        &:focus {
          border: 1px solid ${({ theme }) => theme.colors.warning80};
          color: ${({ theme }) => theme.colors.warning80};
          background: rgba(186, 51, 51, 0.2);
        }
      `}

      ${props.color === 'disabled' &&
      css`
        border: 1px solid ${({ theme }) => theme.colors.neutral30};
        color: ${({ theme }) => theme.colors.neutral30};
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
