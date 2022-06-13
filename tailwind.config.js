module.exports = {
  plugins: [
    require("@tailwindcss/forms")({ strategy: "class" }),
    require('daisyui'),
    require('@tailwindcss/typography'),
    // ...
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./core/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-light": "#FFAF30",
        primary: "#FF9D00",
        "primary-darker": "#E28B00",
      },
    },
  },
  daisyui: {
    themes:["light"],
  }
};
