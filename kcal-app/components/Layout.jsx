
import { useState, useEffect } from 'react';
import SideMenu from './SideMenu';
import { useSession, getSession } from 'next-auth/react';

export default function Layout({ children }) {

    const [collapsed, setCollapsed] = useState(true);
    const [isLogin, setIsLogin] = useState(false);
    
    useEffect(() => { 
        getSession().then((session) => {
                if (session) {
                    setIsLogin(true);
                    console.log(session)
                 }
       });
    }, []);

    const handleToggleSidebar = () => {
        setCollapsed(element => !element);
    }

   

    return (
        <>
            <div className="flex bg-white text-black">
            {isLogin && <SideMenu />}
           {isLogin && <main className="flex min-h-screen justify-center py-10 min-w-[85%]">{children}</main>}
           {!isLogin && 
           <main className="flex min-h-screen justify-center items-center py-10 min-w-full">
            {children}
            </main>}
            </div>
        </>
    )
}