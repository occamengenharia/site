import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { FaFileExcel } from 'react-icons/fa'

export const ModalContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2.4rem 3.2rem;

  span {
    color: ${props => props.theme.colors.error};
    font-weight: 400;
  }

  p {
    color: ${props => props.theme.colors.error};
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    padding: 4rem 10.4rem;

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

export const Cross = styled(FaFileExcel)`
  height: 8rem;
  width: 8rem;

  margin-bottom: 1.6rem;

  color: ${props => props.theme.colors.error};
`
