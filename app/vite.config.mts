/// <reference types="vitest/config" />
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { playwright } from '@vitest/browser-playwright'
import path, { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { storybookVis } from 'storybook-addon-vis/vitest-plugin'
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsConfigPaths({
      loose: true,
    }),
    storybookVis(),
  ],
  resolve: {
    alias: {
      app: resolve('./'),
    },
  },
  base: './',
  build: {
    assetsDir: './assets',
    rollupOptions: {
      output: {
        manualChunks: (id: string): string | undefined => {
          if (id.endsWith('.stories.tsx')) {
            return 'stories'
          }
          const match = /node_modules\/(@[^/]+\/[^/]+|[^/]+)/.exec(id)
          if (match) {
            return `vendor/${match[1].replace('/', '_')}`
          }
          if (id.includes('app/src')) {
            return 'app'
          }
          return undefined
        },
      },
    },
    chunkSizeWarningLimit: 1024,
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
    coverage: {
      provider: 'v8',
      exclude: [
        'src/services/**',
        'src/styles/**',
        'src/helpers/**',
        '.storybook/**',
        'src/assets/**',
        'src/providers/**',
        'src/hooks/**',
      ],
    },
  },
})
