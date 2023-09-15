import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          SemiDarkBlue: "rgba(22, 29, 47, 1)",
          Red: "rgba(252, 71, 71, 1)",
          PureWhite: "rgba(255, 255, 255, 1)",
          GreyishBlue: "rgba(90, 105, 143, 1)",
          DarkBlue: "rgba(16, 20, 30, 1)",
          black: "rgba(0, 0, 0, 1)",
        },
        customDarkBlue: "var(--Dark-Blue, #10141E)",
      },
      screens: {
        sm: "600px",
        md: "768px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
export default config;
