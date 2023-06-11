
import { useState, useEffect } from 'react';
import SideMenu from './SideMenu';
export default function Layout({ children }) {

    const [collapsed, setCollapsed] = useState(true);
    

    const handleToggleSidebar = () => {
        setCollapsed(element => !element);
    }

   

    return (
        <>
            <div className="flex bg-white text-black">
            <SideMenu />
            <main className="flex min-h-screen justify-center py-10 min-w-[85%]">{children}</main>
            </div>
        </>
    )
}