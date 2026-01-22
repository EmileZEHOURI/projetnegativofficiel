/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.css",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"

  ],
  theme: {
fontSize: {
      "8xl": [
        "120px",
        {
          lineHeight: "120px",
          letterSpacing: "-6px",
          fontWeight: "500",
        },
      ],
      "7xl": [
        "72px",
        {
          lineHeight: "80px",
          letterSpacing: "-4.5px",
          fontWeight: "600",
        },
      ],
      "6xl": [
        "55px",
        {
          lineHeight: "60px",
          letterSpacing: "-2.5px",
          fontWeight: "500",
        },
      ],
      "5xl": [
        "48px",
        {
          lineHeight: "54px",
          letterSpacing: "-1.6000000023841858px",
          fontWeight: "500",
        },
      ],
      "4xl": [
        "36px",
        {
          lineHeight: "44px",
          letterSpacing: "-1.2000000047683px",
          fontWeight: "500",
        },
      ],
      "3xl": [
        "28px",
        {
          lineHeight: "34px",
          letterSpacing: "-0.000000011920929px",
          fontWeight: "500",
        },
      ],
      "2xl": [
        "24px",
        {
          lineHeight: "30px",
          letterSpacing: "-1px",
          fontWeight: "400",
        },
      ],
      xl: [
        "24px",
        {
          lineHeight: "30px",
          letterSpacing: "-1px",
          fontWeight: "400",
        },
      ],
      lg: [
        "21px",
        {
          lineHeight: "30px",
          letterSpacing: "-0.000000011920929px",
          fontWeight: "400",
        },
      ],
      base: [
        "17px",
        {
          lineHeight: "25px",
          letterSpacing: "-0.69999999988079071px",
          fontWeight: "400",
        },
      ],
      sm: [
        "15px",
        {
          lineHeight: "23px",
          letterSpacing: "-0.6000000238418579px",
          fontWeight: "400",
        },
      ],
      caption1: [
        "20px",
        {
          lineHeight: "24px",
          letterSpacing: "-0.6px",
          fontWeight: "400",
        },
      ],
      caption2: [
        "18px",
        {
          lineHeight: "20px",
          letterSpacing: "-0.3px",
          fontWeight: "400",
        },
      ],
      caption3: [
        "16px",
        {
          lineHeight: "18px",
          letterSpacing: "-0.5px",
          fontWeight: "400",
        },
      ],
      caption4: [
        "13px",
        {
          lineHeight: "15px",
          letterSpacing: "-0.2px",
          fontWeight: "400",
        },
      ],
    },

    borderRadius: {
      DEFAULT: '10px',
      full: "9999px",
    },
    extend: {
      colors: {
        white: "#ffffff",
        primary: {
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
    },
  },
  plugins: [],
};
