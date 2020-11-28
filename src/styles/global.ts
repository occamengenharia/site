import { createGlobalStyle, DefaultTheme } from 'styled-components'

interface IBodyProps extends DefaultTheme {
  theme: {
    colors: {
      background: string
      text: string
      primary: string
    }

    breakpoints: {
      xs: number
      sm: number
      md: number
      lg: number
      xl: number
    }
  }
}

export default createGlobalStyle<IBodyProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px 'Ubuntu', sans-serif;
  }
`
