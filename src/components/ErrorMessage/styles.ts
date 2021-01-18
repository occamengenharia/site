import styled from 'styled-components'

export const Message = styled.p`
  font-weight: 400;
  font-size: 1.2rem !important;
  text-align: left;
  color: ${props => props.theme.colors.error};
`
