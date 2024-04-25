export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    "<rootDir>/globals.d.ts"
  ],
  transform: {
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "jest-transform-stub"
  }

};
