const withPlugins = require('next-compose-plugins');

const withSass = require('@zeit/next-sass');
const withFonts = require('next-fonts');
const withSvgr = require('next-svgr');

module.exports = withPlugins([withSass, withFonts, withSvgr]);
