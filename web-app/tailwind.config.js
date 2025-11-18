/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      colors: {
        terminal: {
          bg: '#0a0e14',
          text: '#b3b1ad',
          green: '#7fd962',
          blue: '#59c2ff',
          purple: '#d2a6ff',
          cyan: '#95e6cb',
        },
      },
    },
  },
  plugins: [],
}
