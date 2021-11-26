import styled from 'styled-components'

export const MemberStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 70vh;
  background-color: ${props => props.theme.colors.backgorudElevation};
  box-shadow: 0 0 0.8rem 0 rgba(0, 0, 0, 0.25);
  img {
    width: 100%;
    height: 60%;
    object-fit: cover;
  }
  aside {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 1.2rem;
    top: 50%;

    button {
      border: none;
      background: transparent;

      svg {
        cursor: pointer;
        color: ${props => props.theme.colors.details};
        font-size: 1.6rem;
      }
    }

    button:focus,
    button:hover {
      svg {
        color: ${props => props.theme.colors.primary};
      }
    }
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 40%;
    text-align: center;
    padding: 2rem;
    position: relative;
    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1.8rem 0;
      width: 100%;
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
  @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    flex-direction: row;
    height: 41.6rem;
    padding: 0;
    gap: 2rem;
    img {
      height: 100%;
      max-height: 100%;
      max-width: 40%;
    }
    svg {
      margin: 0 2.4rem;
    }
    aside {
      top: 70%;
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

  padding: 1.6rem 0 0;

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
