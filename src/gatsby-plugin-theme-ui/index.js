import chronoblogTheme from 'gatsby-theme-chronoblog/src/gatsby-plugin-theme-ui';

export default {
  ...chronoblogTheme,
  initialColorMode: 'light',
  colors: {
    ...chronoblogTheme.color,
    text: '#222',
    background: '#fff',
    link: '#E73B70',
    primary: '#f5cd79',
    secondary: '#f7d794',
    muted: '#f7f7f7',
    modes: {
      ...chronoblogTheme.colors.modes,
      dark: {
        ...chronoblogTheme.colors.modes.dark,
        text: '#eaeaea',
        background: '#372754',
        muted: '#645187'
      }
    }
  },
  fontSizes: [14, 16, 18, 20, 22, 24, 28, 36],
  borderRadius: {
    ...chronoblogTheme.borderRadius,
    card: 8,
    button: 8,
    search: 8,
    code: 8,
    img: 8,
    authorBanner: 8
  },
  borderWidth: {
    ...chronoblogTheme.borderWidth,
    card: 2,
    search: 2
  },
  buttons: {
    ...chronoblogTheme.buttons,
    active: {
      ...chronoblogTheme.buttons.buttonStyle,
      color: 'text'
    }
  },
  fonts: {
    ...chronoblogTheme.fonts,
    body: 'Letter Gothic Std,-apple-system,BlinkMacSystemFont,sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  }
};
