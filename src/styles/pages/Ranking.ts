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
    > section {
      align-items: center;
      display: flex;
      align-self: flex-start;
      flex-wrap: wrap;
      justify-content: space-between;
      background: #background;
      border-radius: 8px;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    }
    > h3 {
      margin-top: 2rem;
      width: 100%;
      text-align: start;
    }
    @media (min-width: ${props => props.theme.breakpoints.md}px) {
      width: min(90vw, 1000px);
    }
  }

  .pointsM {
    display: flex;
    font-size: 16px;
    flex-direction: inline;
    color: #78c516;
    align-items: center;
    gap: 8px;
  }
  h5 {
    font-size: 16px;
    color: #e45b5b;
    font-weight: normal;
  }
  .pointsM text {
    font-size: 16px;
  }
`
