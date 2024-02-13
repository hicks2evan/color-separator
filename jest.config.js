module.exports = {
    "roots": [
      "<rootDir>/src"
    ],
    "testMatch": [
      "**/__tests__/**/*.+(ts|tsx|js)",
      "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
    moduleNameMapper: {
      'd3-color': '<rootDir>/node_modules/d3-color/dist/d3-color.min.js',
    },
  }