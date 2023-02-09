enum LinkColor {
  AMARELO = '#F0DB4F',
  CINZA = '#2b2b2b'
}

interface ILink {
  color?: LinkColor
}

const cafeteriaTheme = {
  colors: {
    linkColors: {
      amarelo: LinkColor.AMARELO,
      cinza: LinkColor.CINZA
    },
    amarelo: '#F0DB4F',
    cinza: '#2b2b2b'
  }
}

export { cafeteriaTheme, LinkColor }
export type { ILink }

