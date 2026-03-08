/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    // Tu peux laisser tes fontSize ici (comme tu l'avais)
    fontSize: {
      "h2-page-title": ["3.5em", { lineHeight: 1.1 }],
      "h2-article-title": ["1.2em", { lineHeight: 1.1 }],
      "h3-page-title" : ["2em",{lineHeight: 1.1}],
      "header-btn": ["0.6em", { lineHeight: 1.1 }],
      "header-content": ["0.6em", { lineHeight: 1.1 }],
      "post-informations": ["0.6em", { lineHeight: 1.1 }],
      "projet-title": ["2.2em", { lineHeight: 1.1 }],
      "projet-surtitle": ["0.2em", { lineHeight: 1.1 }],
      "projet-footer": ["0.9em", { lineHeight: 1.1 }],
      paragraph: ["1em", { lineHeight: 1.5 }],
      "paragraph-quote": ["1.75em", { lineHeight: 1.2 }],

      caption3: ["0.6em", { lineHeight: 1.1 }],
      caption2: ["0.8em", { lineHeight: 1.1 }],
      caption1: ["1em", { lineHeight: 1.1 }],
      
    },

    borderRadius: {
      DEFAULT: "10px",
      full: "9999px",
    },

    extend: {
      colors: {
        white: "#ffffff",

        primary: {
          100: "#f7997f",
          200: "#f68567",
          300: "#f4724f",
          DEFAULT: "#f35f37",
          500: "#f24c1f",
          600: "#e93d0e",
          700: "#d1360d",
        },

        primarybis: {
          100: "#ffae66",
          200: "#ffa14c",
          300: "#ff9332",
          400: "#ff8619",
          DEFAULT: "#FF7900",
          600: "#e56c00",
        },

        secondary: {
          100: "#af80d8",
          200: "#a26bd2",
          300: "#9556cb",
          400: "#8841c5",
          DEFAULT: "#7B2CBF",
          600: "#6e27ab",
        },

        gray: {
          400: "#f2f2f2",
          500: "#e5e5e5",
          600: "#b2b2b2",
          700: "#808080",
          800: "#333333",
          DEFAULT: "#1D1D1D",
        },
      },

      fontFamily: {
        anybody: ["var(--font-anybody)", "sans-serif"],
      },
    },
  },

  plugins: [],
};
