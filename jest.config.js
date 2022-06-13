import { Nuxt, Builder } from 'nuxt'
import nuxtConfig from './nuxt.config'

const resetConfig = {
  loading: false,
  loadingIndicator: false,
  fetch: {
    client: false,
    server: false,
  },
  features: {
    store: true,
    layouts: false,
    meta: false,
    middleware: false,
    transitions: false,
    deprecations: false,
    validate: false,
    asyncData: false,
    fetch: false,
    clientOnline: false,
    clientPrefetch: false,
    clientUseUrl: false,
    componentAliases: false,
    componentClientOnly: false,
  },
  build: {
    indicator: false,
    terser: false,
  },
}

const config = Object.assign({}, nuxtConfig, resetConfig, {
  mode: 'spa',
  srcDir: nuxtConfig.srcDir,
  ignore: ['**/components/**/*', '**/layouts/**/*', '**/pages/**/*'],
})

const buildNuxt = async () => {
  const nuxt = new Nuxt(config)
  await new Builder(nuxt).build()
  return nuxt
}

module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/layouts/**/*.vue',
    '<rootDir>/static/**/*.vue',
    '<rootDir>/store/**/*.ts',
    '<rootDir>/composables/**/*.ts',
    '<rootDir>/pages/**/*.vue',
    '<rootDir>/types/**/*.ts',
  ],
  testEnvironment: 'jsdom',
}

module.exports = async () => {
  const nuxt = await buildNuxt()

  process.env.buildDir = nuxt.options.buildDir
}
