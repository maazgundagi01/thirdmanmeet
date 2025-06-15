import { AgentsView, AgentsViewLoading, AgentsViewError} from '@/modules/agents/ui/views/agents-view'
import { getQueryClient, trpc } from '@/trpc/server'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary'
// import { LoadingState } from '@/components/loading-state';

//First component to load after clicking on the agents will be the Page server component
// It will then prefetch the agents through getMany and it will hydrate the query cache
// Upon agent view loading, the data will be present already to be displayed

const Page = async() => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions())

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<AgentsViewLoading/>}>
        <ErrorBoundary fallback={<AgentsViewError/>}>
          <AgentsView/>
        </ErrorBoundary>
      </Suspense>
      
    </HydrationBoundary>
  )
}

export default Page