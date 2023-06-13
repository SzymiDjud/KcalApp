import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { signOut } from 'next-auth/react';
export default function SideMenu(props){

    const [active,setActive] = useState();

    const router = useRouter();

    const logoutHandler = () => {
        signOut();
    }


    return(
        <Sidebar >
                <Menu>
                        <MenuItem disabled={true}>KCALAPP</MenuItem>
                        <MenuItem icon={<img src="/home.svg" className='sideBarIcon'/>} active={router.pathname === "/Dashboard"  || router.pathname === "/Today"} component={<Link href="/Dashboard" />}> Panel główny</MenuItem>
                        <MenuItem icon={<img src="/products.svg" className='sideBarIcon'/>} active={router.pathname === "/Products" || router.pathname === "/AddProduct"} component={<Link href="/Products" />}> Produkty </MenuItem>
                        <MenuItem icon={<img src="/calendar.svg" className='sideBarIcon'/>} active={router.pathname === "/History"} component={<Link href="/History" />}> Historia </MenuItem>
                        <MenuItem icon={<img src="/person.svg" className='sideBarIcon'/>} active={router.pathname === "/Profile"} component={<Link href="/Profile" />}> Twój profil </MenuItem>
                        <MenuItem icon={<img src="/Logout.svg" className='sideBarIcon'/>} onClick={logoutHandler}> Wyloguj </MenuItem>
                </Menu>
            </Sidebar>
    )
}