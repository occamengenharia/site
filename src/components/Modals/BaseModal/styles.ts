import styled from 'styled-components'
import { MdClose } from 'react-icons/md'

export const ModalContainer = styled.div`
  padding: 4rem 3.2rem;
  text-align: center;

  p {
    font-weight: bold;
    color: ${props => props.theme.colors.primary};
  }

  > span {
    color: ${props => props.theme.colors.secundary};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.lg}px) {
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
