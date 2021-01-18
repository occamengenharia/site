import styled from 'styled-components'

export const Container = styled.div`
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
  }
  div#firstText {
    margin-top: 4.8rem;
  }
  h3 {
    font-size: 8rem;
    text-align: center;
    color: ${props => props.theme.colors.primary};
  }
  h2 {
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;
    width: 258px;
    height: 111px;
    text-align: center;
    color: ${props => props.theme.colors.primary};
  }
  span#subtext {
    font-family: Ubuntu;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    width: 148px;
    height: 36px;
    color: ${props => props.theme.colors.secundary};
    margin-bottom: 7.2rem;
  }
  div#links {
    width: 27.2rem;
    margin-bottom: 7.2rem;
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    div#firstText {
      display: flex;
      flex-direction: row;
      align-content: flex-start;
    }
    h2 {
      font-family: Ubuntu;
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 55px;
      text-align: center;
      width: 612px;
      height: 110px;
      margin-top: 5.6rem;
    }
    h3 {
      margin-top: 3.5rem;
    }
    span#subtext {
      font-family: Ubuntu;
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 28px;
      width: 500px;
      height: 28px;
      margin-top: 0.8rem;
      margin-bottom: 9.6rem;
    }
    div#links {
      width: 416px;
    }
  }
`
