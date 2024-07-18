import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    projectId: "45a4qx",
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:5173'
  },
  component: {
    projectId: "45a4qx",
    specPattern: ['src/**/__tests__/*.{cy,spec}.{js,ts,jsx,tsx}', 'cypress/component/**/*.{js,jsx,ts,tsx}'],
    devServer: {
      framework: 'vue',
      bundler: 'vite'
    }
  }
})
