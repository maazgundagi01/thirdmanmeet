"use client"

import {  useSuspenseQuery } from "@tanstack/react-query"
// import {  useQuery } from "@tanstack/react-query"
import { useTRPC } from "@/trpc/client"
import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";
// import { ErrorState } from "@/components/error-state";

export const AgentsView = () => {
    const trpc = useTRPC();
    
    
    // const {data, isLoading, isError} = useQuery(trpc.agents.getMany.queryOptions());

    //MAAZ - In order for prefetch to work (ref -> modules/agents/server/procedures.ts)
    //  ... we use useSuspenseQuery instead of useQuery
    //MAAZ - isLoading and isError are already "known" by the time the execution has reached
    //  ... here, hence its fine to not use them here. 

    const {data} = useSuspenseQuery(trpc.agents.getMany.queryOptions());


    //We seperate the loading and error componenets and export them below to be used in app/(dashboard)/agents/page.tsx
    // if (isLoading){
    //     return (
    //         <LoadingState
    //             title="Loading Agents"
    //             description="Waking up the agents..."
    //         />
    //     )
    // }
    // if(isError){
    //     return(
    //         <ErrorState 
    //             title="Very sorry, a system error occurred!"
    //             description="Please try in a bit, or reach us out for furthur assistance..."
    //         />
    //     )
    // }
    return (
        <div>
            {JSON.stringify(data, null, 2)}
        </div>
    );
};

export const AgentsViewLoading = () =>{
    return(
        <LoadingState title="Loading Agents" description="This may take a few seconds"/>
    )
}

export const AgentsViewError = () =>{
    return(
        <ErrorState 
            title="Very sorry, a system error occurred!"
            description="Please try in a bit, or reach us out for furthur assistance..."
        />
    )
}