module.exports = {
  mode: 'jit',
  theme: {
    screens: {
      // Constants taken from UI constants.
      // Think of them as 'beyond this breakpoint' when using
      // mobile:my-class, for example.
      // -> @media (min-width: {}px) { ... }
      mobile: '500px',
      tablet: '715px',
      desktop: '1100px',
    },
    fontFamily: {
      primary: ['Marmelad'],
      secondary: ['Poppins'],
      mono: ['SourceCodePro'],
    },
    fontSize: {
      '2xs': ['.66rem'],
      xs: ['.75rem'],
      sm: ['.875rem'],
      tiny: ['.875rem'],
      base: ['1rem'],
      lg: ['1.125rem'],
      xl: ['1.25rem'],
      '2xl': ['1.5rem'],
      '3xl': ['1.875rem'],
      '4xl': ['2.25rem'],
      '5xl': ['3rem'],
      '6xl': ['4rem'],
      '7xl': ['5rem'],
      '8xl': ['6rem'],
      '9xl': ['7rem'],
    },
    filter: {
      grayscale: 'grayscale(1)',
    },
    extend: {
      colors: {
        primary: '#57758F',
        'primary-1': '#',
        'primary-2': '#',
        secondary: '#9EB8CC',
        'secondary-1': '#',
        'secondary-2': '#',
        tertiary: '#FFFEF3',
        'tertiary-1': '#',
        'tertiary-2': '#',
        aux: '#101D23',
      },
      display: ['huge', 'desktop', 'tablet', 'mobile'],
      backgroundOpacity: {
        '10': '0.1',
      },
    },
  },
  variants: {
    borderWidth: ['children', 'children-last'],
    padding: [
      'children',
      'children-first',
      'children-odd',
      'children-even',
      'children-not-first',
      'children-not-last',
    ],
    margin: ['children-last'],
    fontWeight: ['children-last'],
    extend: {
      brightness: ['hover', 'focus'],
    },
  },
  plugins: [
    require('tailwindcss-children'),
    require('tailwindcss-filters'),
    require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/forms'),
  ],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
};
