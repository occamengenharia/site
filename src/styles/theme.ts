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
  blackText: '#201E1E',

  greenPrimary100: '#78C516',

  warning100: '#F48888',
  warning90: '#E45B5B',
  warning80: '#BA3333',

  warningGradient90_0: 'linear-gradient(0deg, #FF4949, #E45B5B)',
  warningGradient90_90: 'linear-gradient(90deg, #FF4949, #E45B5B)',
  warningGradient100_0: 'linear-gradient(0deg, #F48888, #FF6565)',
  warningGradient100_90: 'linear-gradient(90deg, #F48888, #FF6565)'
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
    secundaryBakgorudElevation: '#014BB4',
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

    // REMOVER CORES ANTIGAS AO FINAL DA REFATORAÇÃO DO SITE

    // Quanto menor o número ao lado do nome, mais escura ela é
    primary100: '#0773C6',
    primary90: '#014BB4',
    primary80: '#0E428B',

    // padrão de gradiente: 'valorDaCor_graus:'
    primaryGradient90_0: 'linear-gradient(0deg, #0773C6, #014BB4)',
    primaryGradient90_45: 'linear-gradient(45deg, #0773C6, #014BB4)',
    primaryGradient90_90: 'linear-gradient(90deg, #0773C6, #014BB4)',
    primaryGradient100_0: 'linear-gradient(0deg, #0773C6, #1E8EE4)',
    primaryGradient100_45: 'linear-gradient(45deg, #0773C6, #1E8EE4)',
    primaryGradient100_90: 'linear-gradient(90deg, #0773C6, #1E8EE4)',
    primaryGradient0_100: 'linear-gradient(100deg, #012FB4 0%, #0773C6 100%)',

    neutral100: '#FDFDFD',
    neutral90: '#F7F7F7',
    neutral80: '#EEEEEE',
    neutral70: '#E0E0E0',
    neutral30: '#AAAAAA',
    neutral20: '#858585',
    neutral15: '#3E3E3E',
    neutral0: '#201E1E',

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
    secundaryBakgorudElevation: '#234677',
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
