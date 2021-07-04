const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      extralight: ['SF-Extralight', ...defaultTheme.fontFamily.sans],
      light: ['SF-Light', ...defaultTheme.fontFamily.sans],
      medium: ['SF-Medium', ...defaultTheme.fontFamily.sans],
      base: ['SF-Medium', ...defaultTheme.fontFamily.sans],
      semibold: ['SF-Semibold', ...defaultTheme.fontFamily.sans],
      bold: ['SF-Bold', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      xsm: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      textColor: {
        mainGreen: '#7cc000',
        secondary: '#ffed4a',
        danger: '#e3342f',
      },
      backgroundColor: {
        mainGreen: '#7cc000',
        bgColor: '#F7F6F2',
        header: '#525252',
      },
      borderColor: {
        mainGreen: '#7cc000',
        bgColor: '#F7F6F2',
      },
      ringColor: {
        mainGreen: '#7cc000',
      },
    },
  },
  variants: {
    extend: {
      cursor: ['hover'],
      borderWidth: ['hover'],
      borderColor: ['hover'],
      filter: ['hover'],
    },
  },
  plugins: [],
};
