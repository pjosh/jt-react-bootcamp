module.exports = {
  roots: [
    "src/react_components"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/react_components/**/*.js",
    "src/react_components/**/*.jsx"
  ],
  coveragePathIgnorePatterns: [
    ".*\/__stories__\/.*"
  ],
  moduleDirectories: [
    "./node_modules",
    "../src/react_components"
  ],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
    "^DesignSystem/(.*)$": "identity-obj-proxy",
    "^DesignSystemComponents/(.*)$": "<rootDir>/src/react_components/$1"
  },
  setupFiles: [
    "./src/react_components/__tests__/__helpers__/setup.js"
  ],
  setupFilesAfterEnv: ["./node_modules/jest-enzyme/lib/index.js"],
  testPathIgnorePatterns: [
    "/node_modules/",
    "./src/react_components/__tests__/__helpers__/"
  ]
};
