import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        CormorantGaramond: ['Cormorant Garamond', 'serif'],
        IBMPlexSans: ['IBM Plex Sans', 'sans-serif']
      },
      colors: {
        primary: '#D8D7D3',
        secondary: '#1B1B1B'
      }
    },
  },
  plugins: [],
};
export default config;
