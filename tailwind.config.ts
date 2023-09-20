import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear 1",
      },
      colors: {
        primary: {
          100: "hsl(180 100% 90%)",
          200: "hsl(180 100% 80%)",
          300: "hsl(180 100% 70%)",
          400: "hsl(180 100% 60%)",
          500: "hsl(180 100% 50%)",
          600: "hsl(180 100% 40%)",
          700: "hsl(180 100% 30%)",
          800: "hsl(180 100% 20%)",
          900: "hsl(180 100% 10%)",
        },
      },
      fontFamily: {
        nasa: "nasa",
      },
    },
  },
  plugins: [],
};
export default config;
