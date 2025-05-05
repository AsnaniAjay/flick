/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
        ibm: ['"IBM Plex Sans"', "sans-serif"],
        spline: ['"Spline Sans"', "sans-serif"],
      },
      letterSpacing: {
        "custom-0.45": "0.45px",
      },
    },
  },
  plugins: [],
};
