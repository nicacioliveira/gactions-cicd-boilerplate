module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "!**/node_modules/**",
    "!**/build/**",
  ],
  testPathIgnorePatterns: ["/node_modules/", "/build/"],
};
