module.exports = {
    testEnvironment: 'node',
    testEnvironmentOptions: {
      nodeOptions: {
        "--experimental-vm-modules": true
      }
    },
    roots: ['<rootDir>/src'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    testMatch: ['**/__tests__/**/*.jsx', '**/?(*.)+(spec|test).jsx'],
    moduleFileExtensions: ['js', 'jsx'],
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy',
    },
  };