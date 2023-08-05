/** @type {import('tailwindcss').Config} */
module.exports = {
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
        'otter-back': "url('../../public/images/7-Otter-11.jpg')"
      },
      transformOrigin: {
        'bottom-center': 'bottom center'
      },
      colors: {
        pastel: {
          gray: {
            light: '#FAF3F0',
            dark: '#65647C'
          },
          blue: '#B6DBE2',
          green: '#D4E2D4',
        },
        background: {
          gray: '#171717'
        }
      }
    },
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms")
  ],
}
