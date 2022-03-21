import styled from 'styled-components'

export const Container = styled.div`
  display: inline-block;
  position: relative;
`

export const Tip = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  position: absolute;
  border-radius: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 12px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.neutral10};
  width: max-content;
  max-width: 190px;

  &.top {
    top: calc(30px * -1);
  }

  &.right {
    left: calc(100% + 10px);
    top: 50%;
    transform: translateX(0) translateY(-50%);
  }

  &.bottom {
    bottom: calc(30px * -1);
  }

  &.left {
    left: auto;
    right: calc(100% + 10px);
    top: 50%;
    transform: translateX(0) translateY(-50%);
  }
`
