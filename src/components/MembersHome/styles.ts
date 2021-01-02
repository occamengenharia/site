import styled from 'styled-components'

export const MemberStyle = styled.section`
  display: flex;
  margin: 0 auto;
  height: 416px;
  width: 100vw;
  max-width: 1032px;
  align-items: center;
  background-color: #f7f7f7;

  > img {
    width: 416px;
    height: 416px;
  }

  div {
    font-size: 64px;
    font-weight: bold;
  }

  @media only screen and (max-width: 991px) {
    max-width: 280px;
    height: 422px;
    flex-direction: column;
    align-content: center;

    > img {
      width: 272px;
      height: 272px;
    }

    div {
      font-size: 24px;
    }

    label {
      font-size: 16px;
    }
  }
`
export const Links = styled.section`
  padding-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  svg {
    font-size: 3.2rem;
    color: ${props => props.theme.colors.primary};
  }
`
