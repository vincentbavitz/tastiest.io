module.exports = {
  theme: {
    fontFamily: {
      somantic: ['SomaticRounded'],
      roboto: ['Roboto'],
      robotoslab: ['RobotoSlab'],
      robotoblack: ['RobotoBlack'],
      roboslabsemibold: ['RobotoSlabSemiBold'],
      robotolight: ['RobotoLight'],
      robotoslabsemibold: ['RobotoSlabSemiBold'],
    },
    fontSize: {
      xs: ['.75rem'],
      sm: ['.875rem'],
      tiny: ['.875rem'],
      base: ['1rem'],
      lg: ['1.125rem'],
      xl: ['1.25rem'],
      twoxl: ['1.5rem'],
      threexl: ['1.875rem'],
      fourxl: ['2.25rem'],
      fivexl: ['3rem'],
      sixxl: ['4rem'],
      sevenxl: ['5rem'],
      eightxl: ['6rem'],
      ninexl: ['7rem'],
    },
    extend: {
      colors: {
        primary: '#fe4c00',
        'primary-subtle': '#eb5929',
        secondary: '#ffd618',
        danger: '#130b57',
        article: '#140c57',
      },
    },
  },
  variants: {
    margin: ['responsive', 'first', 'last'],
    minWidth: ['responsive'],
  },
  plugins: [],
};
