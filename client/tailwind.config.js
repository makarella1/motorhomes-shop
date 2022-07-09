/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '50%': { transform: 'translateY(-20%)', opacity: 0.5 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeInRight: {
          '0%': { transform: 'translateX(50%)', opacity: 0 },
          '50%': { transform: 'translateX(-10%)', opacity: 0.5 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        fadeInRight: 'fadeInRight 1s ease-out forwards',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'text-primary': '#15212c',
      primary: '#fff',
      'text-secondary': '#adb3b7',
      secondary: '#e64549',
    },
  },
  plugins: [],
};
