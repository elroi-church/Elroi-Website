module.exports = {
  plugins: [
    require("@tailwindcss/forms")({ strategy: "class" }),
    require("@tailwindcss/typography"),
    require("daisyui"),
    // require("tailwindcss-text-fill-stroke")(),
    // ...
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./core/components/**/*.{js,ts,jsx,tsx}",
    "./core/features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // textFillColor: (theme) => theme("borderColor"),
      // textStrokeColor: (theme) => theme("borderColor"),
      // textStrokeWidth: (theme) => theme("borderWidth"),
      // paintOrder: {
      //   fsm: { paintOrder: "fill stroke markers" },
      //   fms: { paintOrder: "fill markers stroke" },
      //   sfm: { paintOrder: "stroke fill markers" },
      //   smf: { paintOrder: "stroke markers fill" },
      //   mfs: { paintOrder: "markers fill stroke" },
      //   msf: { paintOrder: "markers stroke fill" },
      // },

      colors: {
        "primary-light": "#FFAF30",
        primary: "#FF9D00",
        "primary-darker": "#E28B00",
      },
    },
  },
  // variants: {
  //   // all the following default to ['responsive']
  //   textFillColor: ["responsive"],
  //   textStrokeColor: ["responsive"],
  //   textStrokeWidth: ["responsive"],
  //   paintOrder: ["responsive"],
  // },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF9D00",

          secondary: "#F000B8",

          accent: "#37CDBE",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
};
