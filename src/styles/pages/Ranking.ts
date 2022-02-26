import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  main {
    width: min(85vw, 500px);
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    justify-content: center;
    align-items: center;
    > h3 {
      margin-top: 2rem;
      width: 100%;
      text-align: start;
    }
    @media (min-width: ${props => props.theme.breakpoints.md}px) {
      width: min(90vw, 1000px);
    }
  }
`
