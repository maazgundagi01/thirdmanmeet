"use client"

import { useQuery } from "@tanstack/react-query"
import { useTRPC } from "@/trpc/client"
import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";

export const AgentsView = () => {
    const trpc = useTRPC();
    const {data, isLoading, isError} = useQuery(trpc.agents.getMany.queryOptions());

    if (isLoading){
        return (
            <LoadingState
                title="Loading Agents"
                description="Waking up the agents..."
            />
        )
    }
    if(isError){
        return(
            <ErrorState 
                title="Very sorry, a system error occurred!"
                description="Please try in a bit, or reach us out for furthur assistance..."
            />
        )
    }
    return (
        <div>
            {JSON.stringify(data, null, 2)}
        </div>
    );
};