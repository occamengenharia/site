import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  width: min(90vw, 1100px);

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: min(85vw, 600px);
  }
`
