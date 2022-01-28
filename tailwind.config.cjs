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
          dark_primary: '#2e088b'
        },
      }
    },
    plugins: []
  };
  