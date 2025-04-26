module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif']
    },
    extend: {
      animation: {
        fadeiN: 'fadeIn 0.3s ease-in-out'
      },
      keyframes: {
        fadeiN: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }

      }
    },
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: ['night'],
  }
}
