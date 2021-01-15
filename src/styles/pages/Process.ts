import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 1.6rem;

  h1 {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.colors.primary};

    margin-top: 4.8rem;
  }

  img {
    max-width: 31rem;
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
    /* justify-content: flex-end; */
    flex-direction: column-reverse;
    margin-bottom: 0rem;
    margin-top: 1.6rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    h2 {
      /* margin-left: 0; */
      align-self: flex-start;
      text-align: flex-start;
    }

    .button-and-link {
      width: 41.6rem;
    }
  }
`

export const InfoProcess = styled.div`
  margin: 3.2rem 0 4.8rem;
`

export const Dates = styled.div`
  display: flex;
`

export const DatesContent = styled.aside`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;

  margin-bottom: 1.6rem;
  span {
    color: ${({ theme }) => theme.colors.primary};
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
  display: flex;
  flex-direction: column;

  justify-content: center;
  /* button { movido para classe button-and-link} */

  aside {
    cursor: pointer;

    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.secundary};

    margin-top: 1.6rem;
    align-self: center;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
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

    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    align-self: center;
    font-size: 1.6rem;

    color: ${({ theme }) => theme.colors.primary};

    strong {
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

      color: ${({ theme }) => theme.colors.primary};

      strong {
        font-size: 1.8rem;
      }

      & + p {
        margin-top: 3.2rem;
      }
    }
  }
`
