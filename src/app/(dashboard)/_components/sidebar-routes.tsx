"use client"
import React from 'react';
import {Compass, Layout, MagnetIcon, SearchIcon} from "lucide-react";
import Sidebar from "@/app/(dashboard)/_components/sidebar";
import SidebarItems from "@/app/(dashboard)/_components/sidebar-items";

const guestRoutes = [
    {
        title: 'Home',
        icon: Layout,
        href: "/"
    },

    {
        title: 'Browse ',
        icon: Compass,
        href: "/browse"
    },
    {
        title: 'search',
        icon: SearchIcon,
        href: "/search"
    },

]
const SidebarRoutes = () => {

    const routes = guestRoutes;
    return (
        <div className='flex flex-col  w-full '>
            {
                routes.map(route => (
                    <SidebarItems key={route.href} title={route.title} href={route.href} icon={route.icon} />

                ))
            }
        </div>
    );
};

export default SidebarRoutes;