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
  white: '#FEFEFE',
  blackText: '#201E1E'
}

export const light = {
  colors: {
    background: '#FEFEFE',
    text: '#201E1E',
    primary: '#014BB4',
    primaryGradient: 'linear-gradient(180deg, #014BB4 0%, #0773C6 100%)',
    primaryGradientInverted:
      'linear-gradient(180deg, #FEFEFE 0%, #CECECE 100%);',
    secundary: '#0773C6',
    backgorudElevation: '#F7F7F7',
    buttonBackgorud: '#014BB4',
    backgorudElevationDark: '#01388F',
    inputHighlight: '#0773C6',
    links: '#0773C6',
    linksHover: '#014BB4',
    titles: '#014BB4',
    titlesInverted: '#FEFEFE',
    complementary: '#CECECE',
    subtitles: '#0773C6',
    borderDivision: '#E2E2E2',
    disabled: '#CECECE',
    gradientStop1: '#CECECE',
    gradientStop2: '#dadada',
    gradientStop3: '#f4f4f4',
    gradientStop4: '#FEFEFE',
    ...basicColors
  },
  ...metrics
}

export const dark = {
  colors: {
    background: '#001636',
    text: '#E2E2E2',
    primary: '#00255A',
    primaryGradient: 'linear-gradient(180deg, #FEFEFE 0%, #CECECE 100%);',
    primaryGradientInverted:
      'linear-gradient(180deg, #014BB4 0%, #0773C6 100%)',
    secundary: '#234677',
    backgorudElevation: '#041021',
    backgorudElevationDark: '#00255A',
    inputHighlight: '#4AA5EB',
    buttonBackgorud: '#F7F7F7',
    links: '#E2E2E2',
    linksHover: '#858585',
    titles: '#FEFEFE',
    titlesInverted: '#014BB4',
    complementary: '#0773C6',
    subtitles: '#CECECE',
    borderDivision: '#1a2433',
    disabled: '#858585',
    gradientStop1: '#014BB4',
    gradientStop2: '#0355b9',
    gradientStop3: '#066ac2',
    gradientStop4: '#0773C6',
    ...basicColors
  },
  ...metrics
}
