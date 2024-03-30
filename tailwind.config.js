/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js, jsx, ts, tsx}'],
  theme: {
    extend: {
      fontFamily: {
        hanna: ['Hanna'],
        inter: ['Inter'],
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '960px',
          md: '960px',
          lg: '960px',
          xl: '960px',
          '2xl': '960px',
        },
      },
      keyframes: {
        blink: {
          '0%, 100%': { borderColor: 'rgba(255, 0, 0, 0.2)' },
          '50%': { borderColor: 'rgba(255, 0, 0, 1)' },
        },
      },
      animation: {
        blink: 'blink 1s ease-in-out infinite',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
};
