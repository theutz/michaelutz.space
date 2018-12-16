export interface ThemeInterface {
  fonts: { title: string; body: string }
  colors: {
    primary: string
  }
}

const theme: ThemeInterface = {
  fonts: {
    title: '"Codystar", sans-serif',
    body: '"Raleway", sans-serif',
  },
  colors: {
    primary: 'blue',
  },
}

export default theme
