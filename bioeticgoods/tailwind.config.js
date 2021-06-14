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
        bgColor: '#F7F6F2',
        header: '#525252',
      },
      borderColor: {
        mainGreen: '#7cc000',
        bgColor: '#F7F6F2',
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
