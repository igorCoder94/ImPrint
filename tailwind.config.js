/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
    textShadow: {
      404: '0 0 34px #4F60FF',
      big: '20px 0 34px #FFFFFF',
    },
    extend: {
      height: {
        header: '122px',
        page: 'calc(100vh - 122px)',
      },
      padding: {
        page: '0 0 0 140px',
      },
      width: {
        header: '100%',
      },
      backgroundColor: {
        'dark': '#1E1E1E',
        'light-dark': '#272727',
        'login-page': '#111111',
        'input-search': '#262626',
      },
      borderRadius: {
        component: '17px',
      },
      colors: {
        'blue-default': '#4F60FF',
        'gray-default': '#5F5F5F',
      },
      borderColor: {},
    },
  },
  plugins: [require('tailwindcss-textshadow'), require('tailwind-scrollbar')],
};
