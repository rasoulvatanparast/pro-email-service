module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.ts', '**/?(*.)+(spec|test).ts'],
  verbose: true,
  // forceExit: true, // Not ideal, but helps with hanging async operations
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], 
};