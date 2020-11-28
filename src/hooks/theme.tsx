import {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect
} from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { light, dark } from '../styles/theme'

interface IThemeContextData {
  theme: string
  toggleTheme(): void
}

const ThemeContext = createContext({
  theme: 'light'
} as IThemeContextData)

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const localTheme = window.localStorage.getItem('occamsite:theme')
    if (localTheme) {
      setTheme(localTheme)
    } else {
      setTheme('light')
      window.localStorage.setItem('occamsite:theme', 'light')
    }
  }, [])

  const toggleTheme = useCallback(() => {
    if (theme === 'light') {
      window.localStorage.setItem('occamsite:theme', 'dark')
      setTheme('dark')
    } else {
      window.localStorage.setItem('occamsite:theme', 'light')
      setTheme('light')
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme === 'light' ? light : dark}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

function useTheme(): IThemeContextData {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme muste be user within as ThemeProvider')
  }

  return context
}

export { ThemeProvider, useTheme }
