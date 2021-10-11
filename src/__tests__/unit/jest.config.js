const { resolve } = require("path");
const root = resolve(__dirname, "..", "..", "..");
const rootConfig = require(`${root}/jest.config.js`);

const rootDir = "<rootDir>/src/__tests__";

/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  ...rootConfig,
  rootDir: root,
  displayName: "___ UNIT TESTS ___",
  testEnvironment: `${rootDir}/functional/environment.ts`,
  testMatch: [`${rootDir}/unit/**/*.test.ts`],
  coverageDirectory: `${rootDir}/coverage`,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  collectCoverageFrom: [
    "./src/services/**/*.{ts,tsx,js,jsx}",
    "./src/utils/**/*.{ts,tsx,js,jsx}",
    "!**/node_modules/**",
    "!**/build/**",
    "!./src/generated/**",
    "!./src/migration/**",
  ],
};
