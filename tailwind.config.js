// Genius TS import: https://github.com/vercel/next.js/issues/5318#issuecomment-575959060
function requireTypescript(path) {
  const fileContent = require('fs').readFileSync(path, 'utf8');
  const compiled = require('@babel/core').transform(fileContent, {
    filename: path,
    presets: ['@babel/preset-typescript'],
  });

  return eval(compiled.code);
}

const UI = requireTypescript('./constants/ui.ts');

module.exports = {
  theme: {
    screens: {
      // -> @media (min-width: {}px) { ... }
      mobile: '0px',
      tablet: `${UI.MOBILE_BREAKPOINT}px`,
      desktop: `${UI.TABLET_BREAKPOINT}px`,
      huge: `${UI.DESKTOP_BREAKPOINT}px`,
    },
    fontFamily: {
      somatic: ['SomaticRounded'],
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
        'secondary-alt': '#ffd400',
        danger: '#130b57',
        article: '#140c57',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['last'],
    },
    margin: ['responsive', 'first', 'last'],
    minWidth: ['responsive'],
  },
  plugins: [],
};
