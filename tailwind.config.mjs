/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        inter: ['Inter'],
      },
    },
    colors: {
      gray: '#f5f5f7',
      black: '#000000',
      white: '#FFFFFF',
      purple: '#3858D6',
      'gray-dark': '#8B8E99',
      'blue-dark': '#3858D6',
    },
  },
  plugins: [],
}
