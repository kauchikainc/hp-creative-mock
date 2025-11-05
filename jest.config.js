const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // next.config.jsとテスト環境用の.envファイルが配置されたディレクトリのパスを指定
  dir: './',
});

// Jestのカスタム設定
const customJestConfig = {
  // セットアップファイルのパス
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  // テスト環境
  testEnvironment: 'jest-environment-jsdom',

  // モジュールパスのエイリアス設定
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  // テストファイルのパターン
  testMatch: [
    '**/__tests__/**/*.{js,jsx,ts,tsx}',
    '**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],

  // カバレッジ収集対象
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
  ],
};

// createJestConfigはasync関数をエクスポートし、next/jestが非同期設定を読み込めるようにする
module.exports = createJestConfig(customJestConfig);
