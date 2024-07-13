import React from 'react';
import Logo from "@/app/(dashboard)/_components/logo";
import SidebarRoutes from "@/app/(dashboard)/_components/sidebar-routes";



const Sidebar = () => {
    return (
        <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
            <div className='p-1 items-center'>
                <Logo />
                <div className='flex flex-col w-full '>
                    <SidebarRoutes />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;