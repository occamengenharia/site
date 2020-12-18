import styled from 'styled-components'

export const Container = styled.footer`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 1.6rem;

  height: 48rem;

  @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    min-height: 51.2rem;
  }
`
export const InternalLinks = styled.section`
  display: flex;
  flex-direction: column;

  margin-top: 4.8rem;

  @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    flex-direction: row;
    margin-top: 6.4rem;
  }
`

export const SectionImage = styled.section`
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  span {
    margin-top: 1.6rem;
    max-width: 24rem;
  }

  img {
    width: 20.8rem;
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    display: flex;
    flex-direction: column;

    span {
      margin-top: 4.8rem;
      max-width: 24rem;
    }
  }
`

export const SectionLinks = styled.section`
  display: flex;
  flex-direction: column;

  padding-bottom: 1.6rem;
  border-bottom: 1px solid ${props => props.theme.colors.text};

  width: 90%;
  margin: 4rem auto 0;

  & + & {
    margin-top: 1.6rem;
  }

  // pegar pelo estado para fazer condicional, em um componente isolado

  a {
    display: none;
  }

  > aside {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 1.6rem;

      color: ${props => props.theme.colors.text};
    }
  }

  a {
    color: ${props => props.theme.colors.text};
    font-size: 1.6rem;
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    margin-left: 2.4rem;
    margin-top: 0;
    border: 0;

    & + & {
      margin-top: 0;
    }

    > aside {
      p {
        display: none;
      }
    }
    a {
      margin-top: 1.6rem;
      display: initial;
    }
    a + a {
      margin-top: 1.2rem;
    }
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.lg}px) {
    margin-left: 3.6rem;

    & + & {
      margin-left: 7.2rem;
    }
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.xl}px) {
    margin-left: 4.8rem;

    & + & {
      margin-left: 13.6rem;
    }
  }
`

export const SocialLinks = styled.section`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin: 5.2rem 0 4.8rem;

  span {
    margin-top: 2.4rem;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    flex-direction: row;
    justify-content: space-between;

    padding-top: 2.4rem;
    margin: 16rem 0 4.8rem;

    border-top: 1px solid ${props => props.theme.colors.text};

    span {
      margin-top: 0;
    }
  }
`

export const SocialLinksIcons = styled.section`
  a {
    svg {
      color: ${props => props.theme.colors.text};
      font-size: 2.4rem;
    }
  }
  a + a {
    margin-left: 1.6rem;
  }
`
