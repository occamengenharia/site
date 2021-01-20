import { MdStayPrimaryLandscape } from 'react-icons/md'

export const metrics = {
  breakpoints: {
    xs: 480,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  },

  variables: {
    transition: 0.8,
    borderRadius: 0.8,
    hover: 0.04
  }
}
const basicColors = {
  error: '#E45B5B',
  sucess: '#78C516',
  inputBackground: '#F1F1F1',
  details: '#CECECE',
  text2: '#858585',
  white: '#FEFEFE'
}

export const light = {
  colors: {
    background: '#FEFEFE',
    text: '#201E1E',
    primary: '#014BB4',
    secundary: '#0773C6',
    backgorudElevation: '#F7F7F7',
    buttonBackgorud: '#014BB4',
    inputHighlight: '#0773C6',
    links: '#0773C6',
    linksHover: '#014BB4',
    titles: '#014BB4',
    borderDivision: '#E2E2E2',
    disabled: '#CECECE',
    ...basicColors
  },
  ...metrics
}

export const dark = {
  colors: {
    background: '#001636',
    text: '#E2E2E2',
    primary: '#00255A',
    secundary: '#234677',
    backgorudElevation: '#041021',
    inputHighlight: '#4AA5EB',
    buttonBackgorud: '#F7F7F7',
    links: '#E2E2E2',
    linksHover: '#858585',
    titles: '#E2E2E2',
    borderDivision: '#1a2433',
    disabled: '#858585',
    ...basicColors
  },
  ...metrics
}
