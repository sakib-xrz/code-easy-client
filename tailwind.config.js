/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4F46E5",

          secondary: "#FFFFFF",

          accent: "#1FB2A6",

          neutral: "#1F2937",

          "base-100": "#F2F2F2",

          info: "#3ABFF8",

          success: "#84cc16",

          warning: "#FBBD23",

          error: "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};