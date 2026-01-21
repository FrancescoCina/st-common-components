import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import 'primeicons/primeicons.css'
import { PrimeReactProvider } from 'primereact/api'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { twMerge } from 'tailwind-merge'
import { App } from './App'
import './styles/index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <PrimeReactProvider
        value={{
          unstyled: true,
          ptOptions: { mergeSections: true, mergeProps: true, classNameMergeFunction: twMerge },
          appendTo: document.getElementById('root'),
        }}
      >
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary fallback={<div>Si è verificato un errore. Ricarica la pagina.</div>}>
            <React.Suspense fallback={<div>Caricamento...</div>}>
              <App />
            </React.Suspense>
          </ErrorBoundary>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </PrimeReactProvider>
    </React.StrictMode>,
  )
}
