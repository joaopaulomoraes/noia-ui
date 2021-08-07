module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'packages/**/*.ts(x)?',
    '!packages/**/*.stories.ts(x)?',
  ],
  coveragePathIgnorePatterns: [
    'packages/(provider|css-reset|theme)',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
