import styled from 'styled-components'

export const ProgressArea = styled.div`
  --CanvasSize: 248px;
  position: relative;
  display: flex;
  justify-content: center;
  width: var(--CanvasSize);
  height: var(--CanvasSize);
  > span {
    --Span-size: 48px;
    font-size: 24px;
    border-radius: 50%;
    width: var(--Span-size);
    height: var(--Span-size);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 100;
    right: calc(50% - var(--Span-size) / 2);
    bottom: calc(var(--Span-size) / -2 + 8px);
    color: white;
    background: #0561be;
    padding: 0.4rem;
  }
  > img {
    --Img-size: 224px;
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
export const Statistics = styled.figure`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-template-rows: auto;
  align-items: center;
  gap: 5.3rem;
  ${ProgressArea} {
    grid-column: 1;
  }
  > figcaption {
    grid-column: 2;
    display: flex;
    flex-direction: column;
    > h3 {
      text-transform: uppercase;
      text-align: start;
    }
    > i {
      font-size: 1.6rem;
      font-weight: lighter;
      font-style: italic;
    }
    > aside {
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
    }
  }
`
