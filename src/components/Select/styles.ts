import styled from 'styled-components'
export const BodySelect = styled.div`
  .react-select-container {
    width: 100%;
    min-width: 10rem;
    padding: 0 0.2rem 0.8rem 0;
    position: relative;
    outline: 0;
    .react-select__control {
      border: 1px solid white;
      border-radius: ${props => props.theme.variables.borderRadius}rem;
      :focus-within {
        box-shadow: 0 0 1px 1px ${props => props.theme.colors.primary};
      }

      .react-select__value-container {
        font-size: 2.5rem;
      }
      .react-select__indicators {
      }
    }
    .react-select__menu {
      .react-select__menu-list {
        font-size: 2.5rem;
        .react-select__option {
          margin-left: 0;
        }
      }
    }
  }
`
