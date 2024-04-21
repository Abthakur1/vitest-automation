import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include:['**/*.{test,spec}.?(c|m)[jt]s?(x)'],  // will include both test and spec files
    exclude: ['**/node_modules/**']   // will include exclude
  },
})