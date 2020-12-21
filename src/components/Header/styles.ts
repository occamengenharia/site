import styled from 'styled-components'

export const HeaderStyle = styled.section`
  padding: 1.6rem;
  margin: 0 auto;
  width: 100vw;
  max-width: 1032px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    gap: 3.2rem;
  }

  button {
    display: none;
  }

  @media only screen and (max-width: 991px) {
    max-width: 31.2rem;

    img {
      width: 136px;
      height: 32px;
    }

    h1 {
      display: none;
    }

    button {
      display: flex;
      flex-direction: column;
    }
  }
`

export const HeadText = styled.h1`
  font-size: 16px;
  color: 014bb4;
`

export const LogoStyle = styled.img`
  width: 208px;
  height: 48px;
`

export const Burger = styled.button`
  svg {
    background: #ffffff;
    color: ${props => props.theme.colors.primary};
    font-size: 1.6rem;
  }
`
