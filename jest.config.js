const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  testMatch: ['**/?(*)+(test).ts', '**/?(*)+(test).tsx'],
  resetMocks: true,
  clearMocks: true,
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/src/mocks/styleMock.js',

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i': `<rootDir>/src/mocks/fileMock.js`,

    // Handle module alias (this will be automatically configured for you soon)
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@app(.*)$': '<rootDir>/src/app$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
