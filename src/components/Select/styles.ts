import styled from 'styled-components'
export const BodySelect = styled.div`
  .react-select-container {
    width: 100%;
    min-width: 10rem;
    padding: 0 0.2rem 0.8rem 0;
    position: relative;
    outline: 0;
    .react-select__control {
      background: ${props => props.theme.colors.inputBackground};
      border: 1px solid white;
      border-radius: ${props => props.theme.variables.borderRadius}rem;
      :focus-within {
        box-shadow: inherit 0 0 1px 1px ${props => props.theme.colors.error};
      }

      .react-select__value-container {
        height: 5.6rem;
        .react-select__input {
          font: 400 16px Ubuntu;
        }

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
