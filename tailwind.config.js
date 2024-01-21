
module.exports = {
  content: [  './pages/**/*.{html,js,vue}',
    './components/**/*.{html,js,vue}',],
  theme: {

    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray-light': '#d3dce6',
      'white':"#fff",
         gray: {
          '100': '#f7fafc',
          '200': '#edf2f7',
          // ... other shades
          '900': '#1a202c', // Make sure this is defined
        },
    }
    }
  },
}
