import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { FaCheckCircle } from 'react-icons/fa'

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 3.2rem;
  text-align: center;
  max-width: 34.4rem;

  p {
    font-weight: bold;
    color: ${props => props.theme.colors.primary};
  }

  > span {
    color: ${props => props.theme.colors.secundary};
    margin-bottom: 4rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.lg}px) {
    max-width: 51.2rem;
    padding: 4.8rem 10rem;
    p {
      font-size: 3.2rem;
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
`

export const Link = styled.div`
  cursor: pointer;
  font: 400 1.2rem Ubuntu, sans-serif;
  color: ${props => props.theme.colors.secundary};
`
