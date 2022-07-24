module.exports = {
  plugins: [
    require("@tailwindcss/forms")({ strategy: "class" }),
    require("daisyui"),
    require("@tailwindcss/typography"),
    require('tailwindcss-text-fill-stroke')()
    // ...
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./core/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    textFillColor: (theme) => theme("borderColor"),
    textStrokeColor: (theme) => theme("borderColor"),
    textStrokeWidth: (theme) => theme("borderWidth"),
    paintOrder: {
      fsm: { paintOrder: "fill stroke markers" },
      fms: { paintOrder: "fill markers stroke" },
      sfm: { paintOrder: "stroke fill markers" },
      smf: { paintOrder: "stroke markers fill" },
      mfs: { paintOrder: "markers fill stroke" },
      msf: { paintOrder: "markers stroke fill" },
    },
    extend: {
      colors: {
        "primary-light": "#FFAF30",
        primary: "#FF9D00",
        "primary-darker": "#E28B00",
      },
    },
  },
  variants: { // all the following default to ['responsive']
    textFillColor: ['responsive'],
    textStrokeColor: ['responsive'],
    textStrokeWidth: ['responsive'],
    paintOrder: ['responsive'],
  },
  daisyui: {
    themes: ["light"],
  },
};
