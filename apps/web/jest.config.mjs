import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: ".",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: "jest-environment-jsdom",
  coverageDirectory: "__tests__/coverage",
  testMatch: ["**/*.spec.{js,jsx,ts,tsx}"],
  setupFilesAfterEnv: ["./jest.setup.mjs"],
  passWithNoTests: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "components/{atoms,molecules,organism}/**/*.{ts,tsx}",
    "app/**/*.{ts,tsx}",
    "utils/**/*.{ts,tsx}",
    "!**/*.spec.+{js|jsx|ts|tsx}",
    "!**/*.stories.{js,jsx,ts,tsx}",
    "!**/*.mock.{js,jsx,ts,tsx}",
  ],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "^_types/(.*)": "<rootDir>/types/$1",
    "^_containers/(.*)": "<rootDir>/containers/$1",
    "^_atoms/(.*)": "<rootDir>/components/atoms/$1",
    "^_molecules/(.*)": "<rootDir>/components/molecules/$1",
    "^_organisms/(.*)": "<rootDir>/components/organisms/$1",
    "^_context/(.*)": "<rootDir>/context/$1",
    "^_hoc/(.*)": "<rootDir>/components/hoc/$1",
    "^_svgs/(.*)": "<rootDir>/components/svgs/$1",
    "^_lib/(.*)": "<rootDir>/lib/$1",
    "^_app/(.*)": "<rootDir>/app/$1",
    "^_public/(.*)": "<rootDir>/public/$1",
    "^_hooks/(.*)": "<rootDir>/hooks/$1",
    "^_utils(.*)": "<rootDir>/utils$1",
    "^.+\\.(min.css|less)$": "<rootDir>/__tests__/__mocks__/styleMock.ts",
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
