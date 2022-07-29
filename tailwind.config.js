module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      body: 'Open Sans',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#292A4A',
          darker: '#242546',
          hover: '#383956',
        },

        accent: {
          DEFAULT: '#CF9455',
          hover: '#BB864E',
        },

        gray: '#766F66',
        white: '#ffffff',
      },
      spacing: {
        54: '54px',
        800: '800px',
      },

      content: {
        quote: 'url("assets/img/quoteMark.png")',
      },
    },
  },
  plugins: [],
};
