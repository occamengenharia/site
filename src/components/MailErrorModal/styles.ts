import styled, { keyframes } from 'styled-components'

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    color: ${props => props.theme.colors.background};
    opacity: 54%;
    align-self: flex-end;
    cursor: pointer;

    font-size: 20px;
    padding: 10px 10px 0 0;
  }

  strong {
    font-size: 36px;
    color: ${props => props.theme.colors.primary};
    text-transform: uppercase;
    text-align: center;
    text-shadow: 2px 2px 7px rgba(0, 0, 0, 0.3);

    margin-bottom: 10px;
  }

  p {
    font-size: 12px;
    color: ${props => props.theme.colors.background};
    text-align: center;

    margin: 0 95px 20px 95px;
    margin-bottom: 20px;
  }

  button {
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;

    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.background};

    border: none;
    border-radius: 100vmax;
    width: 220px;
    height: 40px;
    margin-bottom: 5px;
  }

  img {
    max-width: 200px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    div {
      flex-direction: row-reverse;
    }

    svg {
      font-size: 40px;
      padding: 20px 20px 0 0;
    }

    strong {
      font-size: 80px;
    }

    p {
      font-size: 30px;
      margin-bottom: 20px;
    }

    button {
      font-size: 32px;
      height: 110px;
      width: 400px;
      padding: 0 100px;
      margin-bottom: 70px;
    }

    img {
      width: 500px;
      align-self: flex-end;
      padding-left: 20px;
    }
  }
`

const animation = keyframes`
  from{
    width: 100%;
  }

  to{
    width: 0%;
  }
`

export const Timer = styled.div`
  height: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  animation: ${animation} 30s linear infinite;
`
