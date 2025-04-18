/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
theme: {
    extend: {
      colors: {
        'sdsu-bright-red': '#D41736',
        'sdsu-dark-red': '#A6192E',
        'sdsu-charcoal': '#2D2828',
        'sdsu-black': '#000000',
        'sdsu-bright-teal': '#00A39D',
        'sdsu-dark-teal': '#008080',
        'sdsu-light-gray': '#CDCDC8',
        'sdsu-white': '#FFFFFF',

        'acm-blue': 'rgb(0,146,207)',
        'acm-yellow': 'rgb(255,210,0)',
        'acm-orange': 'rgb(245,159,26)',
        'acm-red': 'rgb(239,64,53)',
        'acm-light-blue': 'rgb(114,205,244)',
        'acm-green': 'rgb(178,187,29)',
        'acm-purple': 'rgb(120,29,126)',
        'acm-dark-blue': 'rgb(0,85,150)',
      },
      fontFamily: {
        'sans': ['"Montserrat"', 'sans-serif'],
        'serif': ['"Merriweather"', 'serif'],
        'mono': ['"Inconsolata"', 'monospace'],
        'ACM': ['myriad-pro','sans-serif'],
      },
    },
}
}

