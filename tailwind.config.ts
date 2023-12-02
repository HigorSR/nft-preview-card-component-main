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
      colors: {
        "Soft-blue": "hsl(215, 51%, 70%)",
        "Cyan": "hsl(178, 100%, 50%)",
        "Very-dark-blue(main-BG)": "hsl(217, 54%, 11%)",
        "Very-dark-blue(card-BG)": "hsl(216, 50%, 16%)",
        "Very-dark-blue(line)": "hsl(215, 32%, 27%)"
      }
    },
  },
  plugins: [],
}
export default config
