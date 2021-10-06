import { Interface } from 'readline'
import styled from 'styled-components'
interface IProgressArea {
  canvasSize: number
  lineWidth: number
}
export const ProgressArea = styled.div<IProgressArea>`
  --CanvasSize: ${props => props.canvasSize}px;
  --lineWidth: ${props => props.lineWidth}px;
  position: relative;
  display: flex;
  justify-content: center;
  width: var(--CanvasSize);
  height: var(--CanvasSize);
  > span {
    --Span-size: 4.8rem;
    font-size: 2.4rem;
    font-weight: 700;
    border-radius: 50%;
    width: var(--Span-size);
    height: var(--Span-size);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 100;
    right: calc(50% - var(--Span-size) / 2);
    bottom: calc(var(--Span-size) / -2 + var(--lineWidth));
    color: ${props => props.theme.colors.titles};
    background: ${props => props.theme.colors.primaryGradientInverted};
    padding: 0.4rem;
  }
  > img {
    --Img-size: calc(var(--CanvasSize) * 0.9);
    width: var(--Img-size);
    height: var(--Img-size);
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    z-index: 100;
    right: calc(50% - var(--Img-size) / 2);
    bottom: calc((var(--Img-size) - var(--CanvasSize)) / -2);
  }
`
export const Statistics = styled.div`
  ${ProgressArea} {
    grid-column: 1;
  }
  > figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    width: 31.2rem;
    height: 45rem;
    padding: 3.2rem;
    border-radius: ${props => props.theme.variables.borderRadius}rem;
    background: ${props => props.theme.colors.primaryGradient};
    > figcaption {
      grid-column: 2;
      display: flex;
      flex-direction: column;
      text-align: center;
      > label {
        text-transform: uppercase;
        color: ${props => props.theme.colors.titlesInverted};
        font-size: 2.4rem;
        font-weight: 700;
        cursor: pointer;
      }
      > i {
        color: ${props => props.theme.colors.blackText};
        font-size: 1.6rem;
        font-weight: lighter;
        font-style: italic;
      }
    }
    /* > aside {
      display: flex;
      flex-direction: column;
      gap: 2.8rem;
      margin-top: 2.4rem;
      padding: 1.8rem;
      background: ${props => props.theme.colors.backgorudElevation};
      border-radius: 0.8px;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
      > h5 {
        display: flex;
        justify-content: space-between;
        strong,
        span {
          font-size: 1.6rem;
          font-weight: 400;
        }
        strong {
          font-weight: 700;
        }
      }
    } */
  }
`
