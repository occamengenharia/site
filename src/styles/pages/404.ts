import styled from 'styled-components'

export const Notfound = styled.div`
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    height: 64rem;
  }

  h1 {
    margin-top: 6.4rem;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 56px;
    line-height: 64px;
    text-align: center;
    color: ${props => props.theme.colors.primary};
  }
  h2 {
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: ${props => props.theme.colors.primary};
  }
  div#div2 {
    display: flex;
    flex-direction: column;
  }
  span {
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: ${props => props.theme.colors.secundary};
  }
  span#barra_vertical {
    display: none;
  }
  strong {
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    cursor: pointer;
    color: ${props => props.theme.colors.primary};
  }
  strong:hover {
    text-decoration: underline;
  }
  img {
    width: 272px;
    height: 309px;
    align-items: center;
    align-content: center;
    margin-bottom: 1.6rem;
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    body {
      height: 102.4rem;
    }
    h1 {
      margin-top: 10.4rem;
      font-size: 80px;
      line-height: 92px;
    }
    h2 {
      font-size: 48px;
      line-height: 55px;
    }
    div#div2 {
      flex-direction: row;
    }
    span {
      font-size: 16px;
      line-height: 18px;
    }
    span#barra_vertical {
      display: inline;
      margin-left: 1.6rem;
      margin-right: 1.6rem;
    }
    strong {
      font-size: 16px;
      line-height: 18px;
    }
    img {
      width: 311px;
      height: 353px;
    }
    span#falaOccao {
      margin-left: 36.4rem;
    }
  }
`
