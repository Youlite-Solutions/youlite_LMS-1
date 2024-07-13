"use client"
import React from 'react';
import {usePathname, useRouter} from "next/navigation";
import {cn} from "@/lib/utils";
import {Icon, LucideIcon} from "lucide-react";

interface SidebarItemsProps {
    icon: LucideIcon,
    title: string,
    href: string,
}


const SidebarItems = ({icon:Icon,title,href}:SidebarItemsProps) => {
    const routeName = usePathname();
    const router = useRouter();

    const isActive = (routeName === "/" && href === "/") || (routeName === href) || routeName?.startsWith(`${href}/`);
    const onClick = () => {
        router.push(href);
    }
    return (
        <div className='flex w-full '>
            <button onClick={onClick} type='button'
                    className={cn('flex w-full items-center gap-x-2 text-slate-500 font-[500] pl-6 transition-all hover:text-slate-900 hover:bg-slate-300/30',
                        isActive && "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700",
                    )}>
                <div className='flex items-center gap-x-2 py-4'>
                    <Icon size={22} className={cn("text-slate-500",
                        isActive && "text-sky-700",)}/>
                    {title}

                </div>
                <div className={cn("ml-auto w-3 bg-sky-700 border-2 opacity-0 border-sky-700 h-full transition-all", isActive && "opacity-1")} />
            </button>

        </div>
    );
};

export default SidebarItems;