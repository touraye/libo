"use client"

import * as React from "react"
import {  
  Book,
  Bookmark, 
  GalleryVerticalEnd,
  History,    
  Settings2,  
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { TeamSwitcher } from "./theme-switcher"

const data = {
  user: {
    name: "Adhem Dicko",
    email: "admed@dickon.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Libo Read",
      logo: GalleryVerticalEnd,
      plan: "Library",
    }
  ],
  navMain: [
    {
      title: "Shelf",
      url: "/shelf",
      icon: Book,
      isActive: true,     
    },
    {
      title: "Collections",
      url: "/collection",
      icon: Bookmark,      
    },
    {
      title: "History",
      url: "/history",
      icon: History,  
    },
    {
      title: "Settings",
      url: "/setting",
      icon: Settings2,     
    },
  ],  
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>              
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />        
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
