const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xsm: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['SF UI Text'],
      },
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
    },
  },
  plugins: [],
};
