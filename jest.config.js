/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    testMatch: ['**/?(*.)+(spec|test).ts'],
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.ts'],
  };
  