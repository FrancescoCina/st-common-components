import type { Preview } from '@storybook/react-vite'
import { initialize, mswLoader } from 'msw-storybook-addon'
import 'primeicons/primeicons.css'
import { PrimeReactProvider } from 'primereact/api'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import '../src/styles/index.css'

initialize({
  onUnhandledRequest: 'bypass',
})

const preview: Preview = {
  loaders: [mswLoader],
  decorators: [
    (Story) => (
      <React.StrictMode>
        <PrimeReactProvider
          value={{
            unstyled: true,
            ptOptions: { mergeSections: true, mergeProps: true, classNameMergeFunction: twMerge },
            appendTo: document.getElementById('root'),
          }}
        >
          <Story />
        </PrimeReactProvider>
      </React.StrictMode>
    ),
  ],
}

export default preview
