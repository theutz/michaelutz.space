export interface Fonts {
  title: string
  body: string
}

export interface Colors {
  background: {
    top: string
    bottom: string
  }
  text: {
    body: {
      light: string
    }
    link: {
      light: string
      dark: string
    }
    display: {
      light: string
      dark: string
    }
  }
  moon: string
  man: {
    head: {
      top: string
      bottom: string
    }
    body: {
      top: string
      bottom: string
    }
    legs: string
  }
  hill: {
    top: string
    middle: string
    bottom: string
  }
}

interface ThemeInterface {
  fonts: Fonts
  colors: Colors
}

export default ThemeInterface
