const metrics = {
  breakpoints: {
    xs: 480,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  },

  variables: {
    transition: 0.8,
    borderRadius: 0.8
  }
}

export const light = {
  colors: {
    background: '#F7F7F7',
    text: '#121214',
    primary: '#0773C6',
    secundary: '#014BB4'
  },

  ...metrics
}

export const dark = {
  colors: {
    background: '#121214',
    text: '#E6E7E9',
    primary: '#0773C6',
    secundary: '#014BB4'
  },

  ...metrics
}
