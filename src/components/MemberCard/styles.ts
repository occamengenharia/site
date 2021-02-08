import styled from 'styled-components'

export const Card = styled.section`
  width: max-content;
  width: 100%;
  height: 20rem;
  border: hidden 1px #cecece;
  padding: 0.8rem 1rem;
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.backgorudElevation};
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 0px 10px 0px rgb(0, 0, 0, 0.2);
  position: relative;
  > img {
    width: 15.2rem;
    height: 15.2rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
  a {
    position: absolute;
    right: 1rem;
    margin-bottom: 1.6rem;
    align-self: flex-end;
    svg {
      color: #cecece;
      font-size: 2.4rem;
    }
    & + a {
      margin-right: 3.2rem;
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
      object-fit: cover;
      object-position: center;
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
    font-size: 2rem;
    font-weight: bold;
  }

  > h2 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.subtitles};
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
