import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { FaCheckCircle } from 'react-icons/fa'

export const SuccessModalContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2.4rem 3.2rem;

  div {
    span {
      color: black;
      font-weight: 300;
      margin-bottom: 3.2rem;
      margin-top: 0.8rem;
      align-self: center;
    }

    p {
      color: black;
      font-weight: bold;
      
    }

    display: flex;
    flex-direction: column;
  // align-items: flex-start;
    text-align: left;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    padding: 4rem 10.4rem;

    p {
      font-size: 3.2rem !important;
    }
  }
`

export const Close = styled(MdClose)`
  width: 1.6rem;
  height: 1.6rem;

  position: absolute;
  right: 2.4rem;
  top: 2.4rem;

  color: ${props => props.theme.colors.details};

  cursor: pointer;
`

export const Check = styled(FaCheckCircle)`
  height: 8rem;
  width: 8rem;

  margin-bottom: 1.6rem;

  color: ${props => props.theme.colors.primary};

  span{
    color: white;
  }
`

export const Link = styled.div`
  cursor: pointer;
  font: 400 1.2rem Ubuntu, sans-serif;
  color: ${props => props.theme.colors.secundary};
`
