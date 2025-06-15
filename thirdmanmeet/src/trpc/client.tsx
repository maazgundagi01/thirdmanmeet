'use client';
// ^-- to make sure we can mount the Provider from a server component

/** BY MAAZ ---->
 * This file sets up the tRPC and React Query providers for the client side of the app.
 *
 * Used in a Next.js app to provide tRPC and React Query context to the entire React tree.
 * Wraps your layout or root component in `app/layout.tsx` or a client component like `app/providers.tsx`
 *
 * Responsibilities:
 * - Creates a single `QueryClient` (with memoization in the browser)
 * - Initializes the `tRPCClient` with HTTP batching
 * - Provides both `QueryClientProvider` and `TRPCProvider`
 *
 * This ensures all tRPC hooks (e.g. `api.agents.getMany.useQuery()`) have access to the query client and tRPC client.
 */


import type { QueryClient } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { createTRPCContext } from '@trpc/tanstack-react-query';
import { useState } from 'react';
import { makeQueryClient } from './query-client';
import type { AppRouter } from './routers/_app';

// Maaz - Create tRPC context hooks for the app
export const { TRPCProvider, useTRPC } = createTRPCContext<AppRouter>();

let browserQueryClient: QueryClient;


// Maaz - Returns a memoized QueryClient in the browser, and a new one on the server
function getQueryClient() {
  if (typeof window === 'undefined') {
     // On the server: always return a new instance
    return makeQueryClient();
  }
   // On the browser: reuse the same instance to prevent unnecessary re-renders
  if (!browserQueryClient) browserQueryClient = makeQueryClient();
  return browserQueryClient;
}
// Determines the base URL for API calls
function getUrl() {
  const base = (() => {
    if (typeof window !== 'undefined') return '';
    return process.env.NEXT_PUBLIC_APP_URL;
  })();
  return `${base}/api/trpc`;
}

// tRPC + React Query provider wrapper
export function TRPCReactProvider(
  props: Readonly<{
    children: React.ReactNode;
  }>,
) {


  const queryClient = getQueryClient();
  // Important: useState ensures trpcClient is preserved across rerenders
  const [trpcClient] = useState(() =>
    createTRPCClient<AppRouter>({
      links: [
        httpBatchLink({
          // Add `transformer: superjson` here if you're using a data transformer
          url: getUrl(),
        }),
      ],
    }),
  );
  return (
    <QueryClientProvider client={queryClient}>
      <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
        {props.children}
      </TRPCProvider>
    </QueryClientProvider>
  );
}