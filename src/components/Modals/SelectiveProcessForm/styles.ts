import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { FaCheckCircle } from 'react-icons/fa'
import { Main as Button } from '@/components/Button/styles.ts'
export const ModalContainer = styled.div`
  padding: 4rem 1.2rem;
  text-align: center;
  max-width: 344rem;
  aside {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    align-self: center;
    width: 100%;
    gap: 1.2rem;
    padding-top: 4rem;
    span {
      transition: 0.5s;
      color: ${props => props.theme.colors.primary};
    }
  }

  h3 {
    font-weight: bold;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 7.2rem;
  }
  ${Button} {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.inputBackground};
    span {
      color: ${props => props.theme.colors.inputBackground};
    }
    &:disabled:hover {
      cursor: progress;
    }
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    padding: 4.8rem 7.2rem;
    max-width: 87.2rem;
    aside {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row-reverse;
    }
    ${Button} {
      width: 300px;
    }
    p {
      font-size: 3.2rem;
    }

    h3 {
      margin-bottom: 9.6rem;
    }
  }
`

export const SuccessModalContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2.4rem 3.2rem;

  > span {
    color: ${props => props.theme.colors.secundary};
  }

  p {
    color: ${props => props.theme.colors.primary};
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

export const Check = styled(FaCheckCircle)`
  height: 8rem;
  width: 8rem;

  margin-bottom: 1.6rem;

  color: ${props => props.theme.colors.primary};
`
