import styled from 'styled-components'
import { FiX } from 'react-icons/fi'

export const CloseButton = styled(FiX)`
  color: ${({ theme }) => theme.colors.neutral20};
  width: 2.4rem;
  height: 2.4rem;
`
