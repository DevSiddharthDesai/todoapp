/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      backgroundColor: {
        buttonPrimary: "#ffd43b",
        buttonSecondary: "#e74c3c",
        SidebarBackground: "#F4F4F4",
      },
      textColor: {
        primary: "#fff", // Text color for primary button
        secondary: "#fff", // Text color for secondary button
      },
      borderColor: {
        inputBorder: "#767676",
      },
    },
  },
  plugins: [],
};
