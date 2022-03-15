const defaultConfig = {
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: [
    "text",
    "lcov",
  ],
  coverageThreshold: {
    global: {
      branch: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    }
  },
  maxWorkers: "50%",
  watchPathIgnorePatterns: [
    "node_modules"
  ],
  transformIgnorePatterns: [
    "node_modules"
  ]
}

export default {
  projects: [
    {
      ...defaultConfig,
      testEnvironment: "node", // node (backend)
      displayName: "backend",
      collectCoverageFrom: [
        "server/",
        "!server/index.js",
      ],
      transformIgnorePatterns: [
        ...defaultConfig.transformIgnorePatterns,
        "public" // public (frontend)
      ],
      testMatch: [ 
        "**/tests/**/server/**/*.test.js"
      ]
    },
    {
      ...defaultConfig,
      testEnvironment: "jsdom", // jsdom (frontend)
      displayName: "frontend", // frontend
      collectCoverageFrom: [
        "public/", // public (frontend)
      ],
      transformIgnorePatterns: [
        ...defaultConfig.transformIgnorePatterns,
        "server" // server (backend)
      ],
      testMatch: [
        "**/tests/**/public/**/*.test.js"
      ]
    }
  ]
}