const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        mainGreen: '#7cc000',
        secondary: '#ffed4a',
        danger: '#e3342f',
      },
      backgroundColor: {
        mainGreen: '#7cc000',
        secondary: '#ffed4a',
        danger: '#e3342f',
      },
    },
  },
  variants: {
    extend: {
      cursor: ['hover'],
    },
  },
  plugins: [],
};
