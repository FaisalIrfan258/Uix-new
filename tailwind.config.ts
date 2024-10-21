import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // or 'media' if you want to follow system preferences

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      spacing: {
        '20vh': '20vh',
        '30vh': '30vh',
        '50vh': '50vh',
        '100vh': '100vh',
      },
      gradient: {
        'custom-gradient': 'linear-gradient(135deg, #00adef 0%, #0074b7 100%)',
      },
    },
  },
  plugins: [],
};
export default config