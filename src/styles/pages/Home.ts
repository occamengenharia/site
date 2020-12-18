import styled from 'styled-components'
export const Page = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  scroll-behavior: smooth;
  > div {
    scroll-snap-align: start;
    height: 100%;
    position: relative;
  }
`
export const Initial = styled.div``
export const Actuation = styled.div`
  background: ${props => props.theme.colors.primary};
`
export const Members = styled.div`
  >div{
    font-size: 48px;
  }
`
export const AboutUs = styled.div`
  background: ${props => props.theme.colors.primary};
`
export const Footer = styled.div``
