import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontSize: {
      'xs': '0.75rem',
      'sm': '0.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    extend: {
      keyframes: {
        pulse2: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(222, 221, 237, 0.7)', },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 0 10px 10px rgba(222, 221, 237, 0)' },
        },
      },
      colors:{
        black:{
          DEFAULT: '#000000',
          100: '#000319',
          200: '#0f0015',
          300: '#062315',
        },
        purple:{
          100: '#cdcbff',
          200: '#5a3a82',
          300: '#6d35b1',
          400: '#7941bd',
        },
      },
    },
  },
  plugins: [],
};
export default config;
