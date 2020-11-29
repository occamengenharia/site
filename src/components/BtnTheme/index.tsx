import { Main } from './styles'
import { useTheme } from '@/hooks/theme'
import { CgDarkMode } from 'react-icons/cg'
const BtnTheme: React.FC = () => {
  const { toggleTheme } = useTheme()
  return (
    <Main onClick={toggleTheme}>
      <CgDarkMode />
    </Main>
  )
}

export default BtnTheme
