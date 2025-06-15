import { createTRPCRouter, baseProcedure} from "@/trpc/init";
import { agents } from "@/db/schema";
import { db } from "@/db";
// import { TRPCError } from "@trpc/server";

// Maaz –   Defines a router for fetching agents from the database
//      ... registered in trpc/routes/_app.ts


export const agentsRouter = createTRPCRouter({
    getMany:baseProcedure.query(async ()=>{
        const data = await db.
        select().
        from(agents);

        // await new Promise((resolve)=>setTimeout(resolve,5000));
        // throw new TRPCError({code:"BAD_REQUEST"});

        return data;
    })
})