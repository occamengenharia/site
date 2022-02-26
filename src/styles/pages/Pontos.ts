import styled from 'styled-components'

interface IColorProps {
    jagunso: string;
  }
  
export const Multiply = styled.div<IColorProps>`
  align-items: center;
  display: flex;
  font-size: 25px;
  padding: 1rem;

  >h3{
    font-weight: 500;
    margin-right: 16px;
    font-size: 24px;
    border-radius: 8px;
    padding: 1rem;
    color: white !important;
    background: ${(props) => (props.jagunso)} !important;
  }
  >h4{
      font-size: 16px;
  }
`;