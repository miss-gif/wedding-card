import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './scss/global.scss'
import { ModalContext } from './contexts/ModalContext.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Suspense } from 'react'
import FullScreenMessage from './components/shared/FullScreenMessage.tsx'
import ErrorBoundary from './components/shared/ErrorBoundary.tsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ModalContext>
      <ErrorBoundary fallback={<FullScreenMessage type="error" />}>
        <Suspense fallback={<FullScreenMessage type="loading" />}>
          <App />
        </Suspense>
      </ErrorBoundary>
    </ModalContext>
  </QueryClientProvider>,
)
