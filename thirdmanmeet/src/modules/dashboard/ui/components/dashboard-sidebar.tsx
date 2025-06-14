"use client"

import{
    Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, 
    SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem
} from "@/components/ui/sidebar";
import Link from "next/link";
import { VideoIcon, BotIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import {Separator} from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import DashboardUserButton from "./dashboard-user-button";
const firstSection = [
    {
        icon: VideoIcon,
        label: "Meetings",
        href: "/meetings"
    },
    {
        icon: BotIcon,
        label: "Agents",
        href: "/agents"
    }
]
const secondSection = [
    {
        icon: StarIcon,
        label: "Upgrade",
        href: "/upgrade"
    }
]

function DashboardSidebar() {
    const pathname = usePathname()
    return (
    <Sidebar>
        <SidebarHeader className="text-sidebar-accent-foreground">
            <Link href="/" className="flex items-center gap-2 px-2 pt-2">
                <Image src="/logo-bright.png" alt="logo" height={44} width={44}></Image>
                <p className="text-2xl font-semibold">Thirdman AI</p>
            </Link>
        </SidebarHeader>
        <div className="py-2 px-4 opacity-20">
            <Separator className="opacity"/>
        </div>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {firstSection.map((item)=>(
                            <SidebarMenuItem key={item.href}>
                                <SidebarMenuButton asChild className={cn(
                                "h-10 hover:bg-linear-to-r/oklch border border-transparent hover:border-[#0369a1]/10 from-sidebar-accent from-5% via-30% via-sidebar/70 to-sidebar/50 via-40% to-sidebar/20",
                                pathname===item.href && "bg-linear-to-r/oklch border-[#0369a1]/10"
                                )}
                                isActive={pathname === item.href}
                                >
                                    <Link href="item.href">
                                        <item.icon className="size-5" />
                                        <span className="text-sm font-medium tracking-tight">
                                            {item.label}
                                        </span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        <div className="py-2 px-4 opacity-20">
            <Separator className="opacity"/>
        </div>
            <SidebarGroup>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {secondSection.map((item)=>(
                            <SidebarMenuItem key={item.href}>
                                <SidebarMenuButton asChild className={cn(
                                "h-10 hover:bg-linear-to-r/oklch border border-transparent hover:border-[#0369a1]/10 from-sidebar-accent from-5% via-30% via-sidebar/70 to-sidebar/50 via-40% to-sidebar/20",
                                pathname===item.href && "bg-linear-to-r/oklch border-[#0369a1]/10"
                                )}
                                isActive={pathname === item.href}
                                >
                                    <Link href="item.href">
                                        <item.icon className="size-5" />
                                        <span className="text-sm font-medium tracking-tight">
                                            {item.label}
                                        </span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="text-white">
            <DashboardUserButton/>

        </SidebarFooter>
    </Sidebar>
  )
}

export default DashboardSidebar