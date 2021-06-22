module.exports = {
  mode:'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // animation: ['hover', 'focus'],
    },
  },
  variants: {
    extend: {
      animation: ['responsive','motion-safe','hover'],
      // animation:['group-hover'],
      // animation: true,
    },
  },
  plugins: [],
  corePlugins: {
    // ...
  //  animation: true,
   
   animation: ['group-hover'],
  }
}
