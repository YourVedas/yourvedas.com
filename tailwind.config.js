module.exports = {
  content: ['./resources/views/**/*.edge', 'content/**/*.md'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      gray: {
        100: '#F8F7F6',
        200: '#e8e8e8',
        700: '#72716D',
        900: '#2C2B2A',
      },
      tomato: {
        600: '#F33330',
      },
    },
    backgroundImage: {
      line: 'linear-gradient(180deg, #E7E5E0 0%, rgba(255, 255, 255, 0) 100%);',
    },
    fontFamily: {
      display: ['Karrik'],
      body: ['EB Garamond'],
      mono: ['Operator mono'],
    },
    boxShadow: {
      DEFAULT: '0px 8px 32px rgba(0, 0, 0, 0.08);',
      border: '0px 1px 0px rgba(0, 0, 0, 0.08);',
    },
    extend: {
      maxWidth: {
        article: '65ch',
      },
      spacing: {
        sidebar: '320px',
      },
      fontSize: {
        tiny: '.75rem',
      },
      letterSpacing: {
        wider: '0.8px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
