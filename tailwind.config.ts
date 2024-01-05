import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        poppins: ['Poppins'],
        inter: ['Inter'],
      },
    },
    colors: {
      gray: '#F5F5F7',
      black: '#000000',
      white: '#FFFFFF',
      purple: '#3858D6',
      'gray-dark': '#8B8E99',
      'blue-dark': '#3858D6',
    },
  },
  plugins: [],
}
export default config
