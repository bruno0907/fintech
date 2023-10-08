import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Router } from './router';
import { queryClient } from './app/config/queryClient';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './app/contexts/AuthContext';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
        <Toaster position="bottom-center" />
        <ReactQueryDevtools />
      </AuthProvider>
    </QueryClientProvider>
  );
}

