/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"]
      },
      colors: {
        'tiber': {
          '50': '#f0fdfa',
          '100': '#cdfaf1',
          '200': '#9bf4e5',
          '300': '#61e7d5',
          '400': '#30d1c1',
          '500': '#17b5a8',
          '600': '#109189',
          '700': '#11746e',
          '800': '#125d5a',
          '900': '#144d4a',
          '950': '#053030',
        },
        'apple': {
          '50': '#f0fdf3',
          '100': '#ddfbe4',
          '200': '#bcf6cb',
          '300': '#88eda4',
          '400': '#4ddb75',
          '500': '#25c252',
          '600': '#1cb447',
          '700': '#177e35',
          '800': '#18632e',
          '900': '#155228',
          '950': '#062d13',
        },

      }
    },
  },
  plugins: [],
};
