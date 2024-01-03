/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
          // Extend or override the default theme here
          // Example: You can add custom colors, fonts, or breakpoints
          screens: {
            'xsm':'500px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1400px',
            '3xl': '1500px',
            '4xl': '1600px',
            '5xl': '1700px',
          },
          colors: {
            'primary': '#FF5733',
            'nav':'#F2A53E'
          },
          fontFamily: {
            'custom': ['CustomFont', 'sans','Roboto'],
          },
          borderWidth:{
            '1':'1px',
            'n':'2px'
          },
          width:{
            '1':'4px',
            'n':'2px'
          },
          height:{
            'n':'1px',
            'hmax':'31rem'
          },fontSize:{
            'q':'1.1rem',
            's':'1rem'
          }
        },
  },
  plugins: [],
}

