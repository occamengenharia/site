import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.25);

  .arrows {
    cursor: pointer;
    transition: 0.2s all;
  }

  .arrows:hover {
    color: ${props => props.theme.colors.primary};
  }

  img {
    cursor: pointer;
    width: 27.2rem;
    height: 15.4rem;
  }
  div {
    background-color: ${props => props.theme.colors.secundary};
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0.8rem 0;

    span {
      color: ${props => props.theme.colors.white};
    }
    svg {
      display: none;
    }
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.lg}px) {
    height: 26.6rem;

    img {
      width: 41.6rem;
      height: 23.4rem;
    }
    div {
      padding: 1.2rem;

      justify-content: space-between;

      svg {
        display: initial;
        color: ${props => props.theme.colors.white};
        width: 1.6rem;
        height: 1.6rem;
      }
    }
  }
`
