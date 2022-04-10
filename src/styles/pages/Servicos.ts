import styled from 'styled-components'
import { Main as Link } from '@/components/Link/styles'
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  main {
    width: 100%;
    display: flex;
    justify-content: center;
    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      h2 {
        font-size: 3.2rem;
        margin-top: 2.8rem;
        margin-bottom: 4.8rem;
      }

      h3 {
        font-size: 2.4rem;
        margin-top: 2.4rem;
      }
      p {
        font-size: 1.6rem;
        font-weight: 400;
        margin-top: 2rem;
        margin-bottom: 1.6rem;
      }
    }
    @media (min-width: ${props => props.theme.breakpoints.md}px) {
      width: 100%;
      display: flex;
      ${Link} {
        width: 300px;
        align-self: flex-end;
        margin-bottom: 2rem;
      }
      section {
        align-items: flex-start;

        h2 {
          font-size: 8rem;
          margin-top: 5.6rem;
          margin-bottom: 9.6rem;
        }
        h3 {
          font-size: 4.8rem;
          margin-top: 4.8rem;
        }
        p {
          font-size: 1.8rem;
          font-weight: 400;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        div {
          position: sticky;
          width: 416px;
          height: 48px;
          left: 819px;
          margin: 3.2rem;
        }
      }
    }
  }
`
