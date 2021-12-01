import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h1{
    font-size: 3.2rem;
    font-weight: 700;
  }

  main {
    width: min(85vw, 500px);
    display: flex;
    justify-content: center;
    flex-direction: column;

    section {
      width: 100%;
      height: 50%;
      background-color: #f1f1f1;
      border-radius: 0.8rem;

      padding: 1.6rem;
      margin-top: 3.2rem;
      margin-bottom: 4rem;

      display: grid;
      grid-template-columns: repeat(2, calc(50%));

      span {
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        margin-bottom: 0.8rem;

        #div1 {
          background-color: #78c516;
        }
        #div2 {
          background-color: #f6cf00;
        }
        #div3 {
          background-color: #e45b5b;
        }
        #div4 {
          background-color: #8b0909;
          margin-top: 0.8rem;
        }
      }

      div {
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 0.8rem;

        > span {
          width: 3.2rem;
          height: 3.2rem;

          font-size: 1.6rem;
          color: white;

          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      p {
        font-size: 1.6rem;
        width: 80%;
        height: 3.2rem;
        color: black;

        display: flex;
        justify-content: start;
        align-items: center;
        margin-left: 0.5rem;
      }
    }

    @media (min-width: ${props => props.theme.breakpoints.md}px) {
      width: min(90vw, 1000px);
      display: flex;
      align-items: flex-start;

      h1{
        font-size: 4.8rem;
        font-weight: 700;
      }
      section {
        width: 100%;
        height: 50%;

        background-color: #f1f1f1;
        border-radius: 0.8rem;

        padding: 1.6rem;
        margin-top: 4rem;
        margin-bottom: 4rem;

        grid-template-columns: repeat(4, calc(25%));
        flex-direction: row;

        div {
          width: 4.8rem;
          height: 4.8rem;
          border-radius: 0.8rem;

          > span {
            width: 4.8rem;
            height: 4.8rem;

            font-size: 2.4rem;
            color: white;

            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        p {
          font-size: 1.6rem;
          width: 80%;
          height: 3.2rem;
          color: black;

          display: flex;
          justify-content: start;
          align-items: center;
          margin-left: 0.5rem;
        }
      }
    }
  }
`
