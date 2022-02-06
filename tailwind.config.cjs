module.exports = {
  purge: ['./src/**/*.html', './src/**/*.svelte'],
  darkMode: 'class',
  content: [],
  theme: {
    fontFamily: {
      body: ['Open Sans', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#28acd4',
        secondary: '#73ccb9',
        dark_primary: '#282a37',
        dark_secondary: '#323645',
        dark_tertiary: '#424657',
        dark_accent: '#1d90f4'
      }
    }
  },
  plugins: []
};
