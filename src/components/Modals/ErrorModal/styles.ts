import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { FaExclamationCircle, FaFileExcel } from 'react-icons/fa'
import { Main as Button } from '@/components/Button/styles'

export const ModalContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2.4rem 3.2rem;

  span {
    color: black;
    font-weight: 300;
    margin-bottom: 3.2rem;
    margin-top: 0.8rem;
    align-self: center;
    
  }

  p {
    color: black;
    font-size: 3.2rem;

  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  ${Button}{
    background: ${props => props.theme.colors.error};
    width: 26.4rem;

    span{
      color: white;
      font-weight: 700;
    }

  }


  @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    padding: 4rem 10.4rem;

    p {
      font-size: 3.2rem;
      color: black;
    }

    ${Button}{
      width: 16rem;
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

export const Cross = styled(FaExclamationCircle)`
  height: 8rem;
  width: 8rem;

  margin-bottom: 1.6rem;

  color: ${props => props.theme.colors.error};
`
