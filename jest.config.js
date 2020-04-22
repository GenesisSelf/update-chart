module.exports = {
    'verbose': true,
    'roots': [
      '<rootDir>/src'
    ],
    'moduleFileExtensions': [
      'ts',
      'tsx',
      'js',
      'jsx',
      'json',
      'node'
    ],
    'testMatch': [
      '<rootDir>/src/**/__tests__/**/*.[jt]s?(x)',
      '<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)'
   ],
   'moduleNameMapper': { '\\.(css|less)$': '<rootDir>/tools/styleMocks.js' }
};