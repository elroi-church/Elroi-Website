import * as path from "path";
module.exports = {
  ignorePatterns: ["**/*.js"],
  extends: "next/core-web-vitals",
  rules: {
    // Other rules
    "@next/next/no-img-element": "off",
    "@next/next/no-html-link-for-pages": [2, path.join(__dirname, "core")],
  },
};
