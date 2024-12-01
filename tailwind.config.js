/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}", // Archivos en la carpeta src
  ],
  theme: {
    extend: {
      fontFamily: {
        sofia: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

