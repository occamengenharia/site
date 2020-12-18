import styled, { css } from 'styled-components'

interface ContainerProps {
  isOpen: boolean
}

export const Container = styled.section<ContainerProps>`
  display: flex;
  flex-direction: column;

  padding-bottom: 1.6rem;
  border-bottom: 1px solid ${props => props.theme.colors.text};

  width: 90%;
  margin: 4rem auto 0;

  & + & {
    margin-top: 1.6rem;
  }

  // pegar pelo estado para fazer condicional, em um componente isolado

  a {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }

  ${props =>
    props.isOpen &&
    css`
      a {
        display: initial;
      }
      &:hover {
        cursor: initial;
      }
    `}

  > aside {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 1.6rem;

      color: ${props => props.theme.colors.text};
    }
  }

  a {
    color: ${props => props.theme.colors.text};
    font-size: 1.6rem;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    margin-left: 2.4rem;
    margin-top: 0;
    border: 0;

    & + & {
      margin-top: 0;
    }

    > aside {
      p {
        display: none;
      }
    }
    a {
      margin-top: 1.6rem;
      display: initial;
    }
    a + a {
      margin-top: 1.2rem;
    }
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.lg}px) {
    margin-left: 3.6rem;

    & + & {
      margin-left: 7.2rem;
    }
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.xl}px) {
    margin-left: 4.8rem;

    & + & {
      margin-left: 13.6rem;
    }
  }
`
