module.exports = {
  testMatch: ['<rootDir>/test/**/*.test.(ts|tsx)'],
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/test/tsconfig.json'
    },
    __DEV__: true
  },
  testPathIgnorePatterns: ["/node_modules/", "/__fixtures__/"],
  coveragePathIgnorePatterns: ['<rootDir>/src/Augments.d.ts', '<rootDir>/src/tinyWarning.ts', '<rootDir>/src/isThenable.ts']
};
