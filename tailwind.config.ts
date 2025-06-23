// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // IMPORTANT for dark mode toggle
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}', // optional if you're using app dir only
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
