import { CommandDialog, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import React from 'react'
import { Dispatch, SetStateAction } from 'react';

interface Props{
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}


export function DashboardCommand({open, setOpen}:Props) {
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
            placeholder='Look up a meeting or an agent'
        />
        <CommandList>
            <CommandItem >
                Test
            </CommandItem >
        </CommandList >

    </CommandDialog>
  )
}

