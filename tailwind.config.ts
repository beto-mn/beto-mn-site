export default {
  content: [
    './app/**/*.{js,vue,ts}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        // Base colors
        'void-black': 'rgb(10 10 10)',

        // Cyber Purple family
        'cyber-void': 'rgb(147 0 220)',
        'cyber-pulse': 'rgb(166 59 194)',

        // Neon Blue family
        'neon-cyan': 'rgb(48 205 226)',
        'electric-blue': 'rgb(0 181 232)',
        'quantum-blue': 'rgb(92 127 241)',

        // Plasma Pink family
        'plasma-magenta': 'rgb(219 40 120)',
        'fusion-pink': 'rgb(228 73 204)',
        'holo-pink': 'rgb(246 151 231)',
      },
      fontFamily: {
        sans: [
          'SF Pro Display',
          'SF Pro Text',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        'sf-pro': [
          'SF Pro Display',
          'SF Pro Text',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
