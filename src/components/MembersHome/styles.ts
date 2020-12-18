import styled from 'styled-components'

export const MemberStyle = styled.section`
  display: flex;
  margin: 0 auto;
  height: 416px;
  width: 100vw;
  max-width: 1032px;
  align-items: center;
  background-color: #F7F7F7;

  >img {
    width: 416px;
    height: 416px;
  }

  div {
    font-size: 64px;
    font-weight: bold;
  }

  div + div{
    font-size: 24px;
    font-weight: normal;
  }
`
export const IconStyle = styled.img`
  width: 32px;
  height: 32px;
`

export const Links = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:1.6rem;
`
