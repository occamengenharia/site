import styled from 'styled-components'

export const Card = styled.section`
  padding: 1.6rem;
  border: hidden 1px #cecece;
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.backgorudElevation};
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 10px 0px rgb(0, 0, 0, 0.2);
  position: relative;

  div {
    display: flex;
    gap: 0.8rem;
    position: absolute;
    right: 1.6rem;
    bottom: 1.6rem;
    align-self: flex-end;

    svg {
      color: #cecece;
      font-size: 2.4rem;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 100%;
    height: 20rem;

    div {
      right: 2.4rem;
      bottom: 2.4rem;

      svg {
        font-size: 2.4rem;
      }
    }
  }
`
export const MemberData = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;

  img {
    min-width: 7.2rem;
    width: 7.2rem;
    height: 7.2rem;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 1.6rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: 0;

    img {
      min-width: 15.2rem;
      width: 15.2rem;
      height: 15.2rem;
      object-fit: cover;
    }
  }
`

export const Data = styled.section`
  display: flex;
  flex-direction: column;

  > h1 {
    text-align: left;
    font-size: 2rem;
    font-weight: bold;
  }

  > h2 {
    text-align: left;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.subtitles};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    > h1 {
      font-size: 3.2rem;
    }

    > h2 {
      font-size: 1.6rem;
    }
  }
`
