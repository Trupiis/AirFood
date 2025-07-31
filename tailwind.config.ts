import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        great: ["var(--font-mi-fuente-1)"],
        playfair: ["var(--font-playfair)"],
        rieven: ["var(--font-rieven)"],
        inter: ["var(--font-inter)"],

        },
      
    },
  },
  plugins: [],
};
export default config;
