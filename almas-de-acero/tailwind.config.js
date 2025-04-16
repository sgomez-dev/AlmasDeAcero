/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // para que escanee todo tu código
  ],
  theme: {
    extend: {
      screens: {
        xl2: "1605px", // Breakpoint personalizado
      },
    },
  },
  plugins: [],
};
