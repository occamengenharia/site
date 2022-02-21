import styled from 'styled-components'

export const MemberStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 70vh;
  background-color: ${props => props.theme.colors.backgorudElevation};
  box-shadow: 0 0 0.8rem 0 rgba(0, 0, 0, 0.25);
  border: 1px solid ${props => props.theme.colors.neutral70};
  box-sizing: border-box;
  border-radius: 8px 8px 8px 8px;

  img {
    width: 100%;
    height: 60%;
    object-fit: cover;
    border-radius: 8px 0px 0px 8px;
    border: 1px solid ${props => props.theme.colors.neutral70};
    box-sizing: border-box;
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
        color: ${props => props.theme.colors.neutral20};
        font-size: 24px;
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
    height: 100%;
    text-align: center;
    padding: 2rem;

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1.8rem 0;
      width: 100%;

      p {
        color: ${props => props.theme.colors.titles};
        font-weight: bold;
        font-size: 56px;
      }

      label {
        color: ${props => props.theme.colors.subtitles};
        font-weight: 300;
        font-size: 24px;
      }
    }

    .member-phrase {
      color: ${props => props.theme.colors.neutral20};
      font-style: italic;
      font-weight: 300;
      font-size: 16px;

      margin-top: 24px;
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
    div {
      main {
        justify-content: center;
        align-items: center;
      }
    }
  }
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
  height: 100%;
`

export const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;

  a {
    margin: 0;
  }

  svg {
    background: ${props => props.theme.colors.neutral70};
    border-radius: 8px;
    padding: 8px;
    color: ${props => props.theme.colors.neutral20};
    width: 40px;
    height: 40px;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.lg}px) {
    svg {
      font-size: 3.2rem;
    }
  }
`
