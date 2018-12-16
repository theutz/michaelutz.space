import ThemeInterface from '../typescript/theme'

const theme: ThemeInterface = {
  fonts: {
    title: '"Codystar", sans-serif',
    body: '"Raleway", sans-serif',
  },
  colors: {
    background: { top: '#07002B', bottom: '#0C004B' },
    hill: { top: '#989354', middle: '#112731', bottom: '#0C004B' },
    man: {
      head: { top: '#D3E0E6', bottom: '#A2CCE0' },
      body: { top: '#134157', bottom: '#073950' },
      legs: '#35434A',
    },
    moon: '#DEDCBF',
    text: {
      body: { light: '#D3E0E6' },
      link: { light: '#B8AFE3', dark: '#134157' },
    },
  },
}

export default theme
