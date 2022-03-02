import styled from 'styled-components'
import { ThemeProps } from './theme'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin: 80px 144px;

  @media only screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    margin: 80px 24px;
  }
`
export const Title = styled.h3``

export const CardContainer = styled.section`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px 36px;
  margin-top: 48px;

  @media only screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 16px;
    margin-top: 80px;
  }
`

export const Card = styled.article<{ cardTheme: ThemeProps }>`
  position: relative;
  display: flex;
  align-items: end;
  padding: 16px;
  min-height: 160px;
  min-width: 360px;

  border-radius: 8px;
  background: ${({ cardTheme }) => cardTheme.background};

  @media only screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    min-height: 120px;
  }
`

export const CardContent = styled.div`
  color: ${({ theme }) => theme.colors.neutral100};

  .title {
    font-size: 24px;
  }

  .description {
    font-size: 12px;
    font-weight: 300;
    margin-top: 4px;
  }
`

export const CardIcon = styled.i`
  position: absolute;
  color: ${({ theme }) => theme.colors.neutral100};
  svg {
    width: 32px;
    height: 32px;
  }

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
