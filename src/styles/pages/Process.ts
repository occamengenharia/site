import { Main as Button } from '@/components/Button/styles.ts'
import { Main as Link } from '@/components/Link/styles.ts'
import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 1.6rem;
  ${Link} {
    width: 300px;
    align-self: center;
  }
  h1 {
    text-transform: uppercase;
    font-size: 3.2rem;
    margin-top: 4.8rem;
  }

  img {
    width: 100%;
    max-width: 102.4rem;
  }

  a {
    margin-top: 3.2rem;
  }

  .button-and-link {
    width: 27.2rem;
    height: 4.8rem;
    background: ${({ theme }) => theme.colors.primary};

    border-radius: ${({ theme }) => theme.variables.borderRadius}rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    transition: 0.2s all;

    svg {
      font-size: 1.6rem;
      color: #fff;
      margin: 0 1.6rem;
    }

    span {
      padding-left: 1.6rem;
      border-left: 1px solid #fff;

      font-weight: bold;
      color: #fff;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.buttonBackgorud};
    }
  }

  .background-secundary {
    background: ${props => props.theme.colors.secundary};
  }

  .date-content-bottom {
    flex-direction: column-reverse;
    margin-bottom: 0rem;
    margin-top: 1.6rem;
  }

  .date-top {
    display: none;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    h2 {
      align-self: flex-start;
      text-align: flex-start;
    }

    .button-and-link {
      width: 41.6rem;
    }
    .dates-down {
      display: none;
    }

    .date-top {
      display: flex;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
  }
`

export const InfoProcess = styled.div`
  margin: 3.2rem 0 4.8rem;
  padding: 0 1.6rem;

  max-width: 102.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Dates = styled.div`
  display: flex;
  width: 100%;
`

export const DatesContent = styled.aside`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;

  margin-bottom: 1.6rem;
  span {
    text-align: center;
    padding: 0.6rem 0;
    font-size: 1.6rem;
    font-weight: normal;
  }

  div {
    display: flex;
    justify-content: center;
    height: 4rem;
    background: ${({ theme }) => theme.colors.primary};

    width: 100%;
    strong {
      color: #fff;
      align-self: center;
    }
  }
`

export const Subscribe = styled.aside`
  width: 100vw;
  max-width: 102.4rem;
  margin: 0 auto;
  padding-right: 1.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  ${Button} {
    width: 300px;
    align-self: flex-end;
  }
  a {
    cursor: pointer;

    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.secundary};

    margin-top: 1.6rem;
    align-self: center;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    button {
      align-self: flex-end;
    }
    a {
      align-self: flex-end;
    }
  }
`
export const Descriptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 102.4rem;

  h2 {
    margin: 6.4rem auto 3.2rem;

    align-self: center;
    text-align: center;
    font-size: 2.4rem;
    max-width: 70%;
  }

  p {
    align-self: center;
    font-size: 1.6rem;

    strong {
      font-weight: bold;
      font-size: 1.6rem;
    }

    & + p {
      margin-top: 1.6rem;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    align-items: flex-start;

    h2 {
      margin-left: 0;
      font-size: 4.8rem;
      max-width: initial;
    }

    p {
      align-self: flex-start;
      font-size: 1.8rem;

      strong {
        font-size: 1.8rem;
      }

      & + p {
        margin-top: 3.2rem;
      }
    }
  }
`
