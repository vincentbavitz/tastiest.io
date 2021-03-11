// const TEST_REGEX = '(/tests/.*|(\\.|/)(test|spec))\\.[jt]sx?$';

module.exports = {
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  // testRegex: TEST_REGEX,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverage: true,
};
