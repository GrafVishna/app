/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto, sans-serif'],
        serif: ['larken-400', 'sans-serif'],
      },
      variants: {
        aspectRatio: ['responsive', 'hover']
      },
      backgroundImage: {
        'gradient': "linear-gradient(180deg, rgba(31, 34, 43, 0.00) 0.42%, #10131C 100%)",
      },
      colors: {
        'main': {
          DEFAULT: '#0B0E17',
        },
        'decor': {
          DEFAULT: '#FFC978',
        },
        'text': {
          dark: 'rgba(11, 14, 23, 0.40)',
          DEFAULT: '#ffffff',
          gray: '#ABAEB7',
        },
      },
    },
    aspectRatio: {
      1: '1',
      test: '1.2 / 1',
      3: '3',
      4: '4',
    },
    corePlugins: {
      aspectRatio: false,
    },
    screens: {
      'mobile-small': '479.98px',
      'mobile': '767.98px',
      'tablet': '991.98px',
    },
  },

  plugins: [
    import('@tailwindcss/aspect-ratio'),
  ],
}