import { join } from 'path';

const config = {
  roots: ['<rootDir>'],
  moduleNameMapper: {
    shared_utils: join(__dirname, 'src/shared/utils'),
  },
  reporters: [
    'default',
    [
      'jest-sonar',
      {
        outputDirectory: './',
        outputName: 'test-reporter.xml',
        reportedFilePath: 'absolute',
      },
    ],
  ],
  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.(ts|js)?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  verbose: false,
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  // coveragePathIgnorePatterns: ['.*I.*([A-Z]|[a-z]).ts?$'],
};

export default config;
