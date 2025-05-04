module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  coverageReporters: ["json", "text", "lcov", "clover"],
  testMatch: ["**/__tests__/**/*.test.ts", "**/*.test.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
};
