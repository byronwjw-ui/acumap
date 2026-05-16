import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { rice: '#FAF7F0', ink: '#1C1C1C', pine: '#1F4D3A', mint: '#E6EFE8', gold: '#C8A96A', danger: '#B42318', dangerSoft: '#FEF3F2' },
      boxShadow: { soft: '0 18px 60px rgba(31,77,58,.10)' }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
export default config;
