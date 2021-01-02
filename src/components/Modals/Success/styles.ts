import styled from 'styled-components'
import { FaCheckCircle } from 'react-icons/fa'

export const Check = styled(FaCheckCircle)`
  height: 8rem;
  width: 8rem;

  margin-bottom: 1.6rem;

  color: ${props => props.theme.colors.primary};
`
