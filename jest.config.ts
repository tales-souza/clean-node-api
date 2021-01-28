export default {
  roots: ['<rootDir>/src/**/*.ts'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "node",
   transform: {
     '.+\\.ts$': 'ts-jest'
   },


};
