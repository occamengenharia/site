import styled from 'styled-components'

export const StyledButton = styled.a<{ width?: string; height?: string }>`
  width: ${props => props.width || '40px'};
  height: ${props => props.height || '40px'};
  background: ${({ theme }) => theme.colors.neutral70};

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;

  :hover {
    background: ${({ theme }) => theme.colors.neutral60};
  }

  :active {
    background: ${({ theme }) => theme.colors.neutral30};
  }

  svg {
    color: ${({ theme }) => theme.colors.neutral20};
    font-size: calc(${props => props.width || '40px'} * 0.6);

    :active {
      color: ${({ theme }) => theme.colors.neutral15};
    }
  }
`
