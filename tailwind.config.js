const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },

  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  variants: {
    borderWidth: ['responsive', 'hover', 'focus', 'active'],
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      tahiti: {
        50: '#EEE5E8',
        100: '#EAD0DA',
        200: '#E5A0BA',
        300: '#FF0062',
        400: '#FF0062',
        500: '#FF0062',
        600: '#FF0062',
        700: '#FF0062',
        800: '#FF0062',
        900: '#640026',
      },
      green: {
        500: '#5ED200',
      },
      gray: {
        100: '#F5F5F5',
        300: '#A7A7A7',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      width: {
        '440px': '440px',
      },
    },
  },
  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/typography')],
};
