import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.6rem;

  margin-bottom: 8rem;
  width: 100%;

  @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    gap: 0;
    flex-direction: row;
    margin-bottom: 4.8rem;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  h1 {
    text-align: left;
    font-size: 3.2rem;
    line-height: 2.4rem;
  }

  h3 {
    font-size: 1.4rem;
    text-align: left;
    color: ${({ theme }) => theme.colors.neutral0};
    font-weight: 300;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    h1 {
      font-size: 4.8rem;
      line-height: initial;
    }

    h3 {
      font-size: 1.8rem;
      font-weight: 300;
    }
  }
`
