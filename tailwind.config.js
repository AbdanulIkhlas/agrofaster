/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakartaSans: ["Plus Jakarta Sans", "sans-serif"],
      },
      screens: {
        hp: "360px",
      },
      colors: {
        primary: "#2C946C", //eucalyptus
        edgewater: "#C1E0D3",
        silverTree: "#7CBCA4",
        shadowGreenn: "#8CC4AC",
      },
      boxShadow: {
        cardShadow: "0 5px 16px 0 rgba(0, 0, 0, 0.15)",
        buttonShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
        secondCardShadow:
          "rgba(0, 0, 0, 0.25) 0px 0.1em 0.1em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;",
      },
      borderRadius: {
        customRounded: "52% 48% 48% 52% / 50% 54% 46% 50% ",
      },
      width: {
        round: "calc(100% - 160px)",
      },
      aspectRatio: {
        "9/16": "9 / 16",
      },
    },
  },
  plugins: [],
};
