import { Main } from './styles'
import { useTheme } from '@/hooks/theme'
import { CgMoon, CgSun } from 'react-icons/cg'
const BtnTheme: React.FC = () => {
  const { toggleTheme, theme } = useTheme()
  return (
    <Main onClick={toggleTheme}>
      {theme === 'light' ? <CgMoon /> : <CgSun />}
    </Main>
  )
}

export default BtnTheme
