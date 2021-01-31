import styled from 'styled-components'

export const MemberStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  background-color: ${props => props.theme.colors.backgorudElevation};
  box-shadow: 0 0 0.8rem 0 rgba(0, 0, 0, 0.25);

  img {
    height: 100%;
  }

  svg {
    cursor: pointer;
    color: ${props => props.theme.colors.details};

    font-size: 1.6rem;
    margin: 0 1.6rem;
  }

  main {
    display: flex;
    align-items: center;
    width: 100%;

    section {
      display: flex;
      justify-content: space-between;
      align-items: center;

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2.4rem 0;

        border-bottom: 1px solid ${props => props.theme.colors.details};

        p {
          color: ${props => props.theme.colors.titles};
          font-weight: bold;
        }

        label {
          font-size: 1.6rem;
          color: ${props => props.theme.colors.subtitles};
          font-weight: 100;
        }
      }
    }
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.lg}px) {
    flex-direction: row;
    height: 41.6rem;

    svg {
      margin: 0 2.4rem;
    }
    main {
      justify-content: center;
      align-items: center;

      section {
        div {
          p {
            font-size: 6.4rem;
          }

          label {
            font-size: 2.4rem;
          }
        }
      }
    }
  }
`
export const Links = styled.div`
  display: flex;
  justify-content: center;

  padding: 1.6rem 0 2.4rem 0;

  svg {
    color: ${props => props.theme.colors.titles};
    font-size: 1.6rem;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.lg}px) {
    padding-top: 3.2rem;

    svg {
      font-size: 3.2rem;
    }
  }
`
