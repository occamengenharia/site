import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *,
  *:before,
  *:after  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration:none;
    list-style:none;
    font-size:62.5%;
  }
  textarea:focus,
  input:focus,
  select:focus,
  button:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
  a, button {
    text-decoration: none;
    cursor: pointer;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 1.6rem Ubuntu, sans-serif;

  transition: all ${({ theme }) => theme.variables.transition}s ;
  }

  h1 {
    font: 700 9.6rem Ubuntu, sans-serif;
  }

  h2 {
    font: 700 8rem Ubuntu, sans-serif;
  }

  h3 {
    font: 700 4.8rem Ubuntu, sans-serif;
  }

  p, i, strong, legend, label {
    font: 500 2.4rem Ubuntu, sans-serif; 
  }

  span{
    font: 500 1.2rem Ubuntu, sans-serif;
  }
`
