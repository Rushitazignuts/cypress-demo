import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    experimentalStudio: true,
    projectId: "45a4qx",
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:5173',
    record: true,
    retries: {
      runMode: 2, // Number of retries during CI runs
      openMode: 0, // Number of retries during `cypress open`
    },
  },
  component: {
    projectId: "45a4qx",
    specPattern: ['src/**/__tests__/*.{cy,spec}.{js,ts,jsx,tsx}', 'cypress/components/**/*.{js,jsx,ts,tsx}'],
    devServer: {
      framework: 'vue',
      bundler: 'vite'
    },
    supportFile: 'cypress/support/component.js'

  }
})
