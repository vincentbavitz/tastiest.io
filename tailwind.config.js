module.exports = {
  // mode: 'jit',
  theme: {
    screens: {
      // Constants taken from UI constants.
      // Think of them as 'beyond this breakpoint' when using
      // mobile:my-class, for example.
      // -> @media (min-width: {}px) { ... }
      sm: '500px',
      md: '715px',
      lg: '900px',
      xl: '1100px',
    },
    fontFamily: {
      primary: ['Marmelad'],
      secondary: ['Montserrat'],
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
    extend: {
      colors: {
        primary: '#274f73',
        secondary: '#3882bb',
        tertiary: '#9EB8CC',
        dark: '#07151b',
        light: '#fafafa',
        danger: '#bc1818',
        success: '#28c625',
      },
      display: ['xl', 'lg', 'md', 'sm'],
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
    require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/forms'),
  ],
  purge: [
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
};
