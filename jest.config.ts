import type { Config } from 'jest';

const config: Config = {
    moduleNameMapper: {
        "^@app/(.*)$": "<rootDir>/src/$1",
    },
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    setupFilesAfterEnv: [
        "@testing-library/jest-dom/extend-expect"
    ]
}

export default config;