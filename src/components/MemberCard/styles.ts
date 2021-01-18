import styled from 'styled-components'

export const Card = styled.section`
  width: 100%;
  max-width: 49.6rem;

  height: 20rem;

  border: hidden 1px #cecece;
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.backgorudElevation};
  display: flex;
  align-items: center;
  box-shadow: 8px 8px 10px #cecece;

  > img {
    width: 15.2rem;
    height: 15.2rem;
  }
  a {
    margin-bottom: 1.6rem;
    align-self: flex-end;
    svg {
      color: #cecece;
      font-size: 2.4rem;
    }
    & + a {
      margin-right: 1.6rem;
      margin-left: 0.8rem;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 100%;
    max-width: 49.6rem;

    height: 20rem;

    > img {
      width: 15.2rem;
      height: 15.2rem;
    }

    svg {
      font-size: 2.4rem;
    }
  }
`
export const Data = styled.section`
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 1.6rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
  }

  > h2 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.secundary};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    > h1 {
      font-size: 3.2rem;
    }

    > h2 {
      font-size: 1.6rem;
    }
  }
`
