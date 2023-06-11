import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
export default function SideMenu(props){

    const [active,setActive] = useState();

    const router = useRouter();


    return(
        <Sidebar >
                <Menu>
                        <MenuItem disabled={true}>KCALAPP</MenuItem>
                        <MenuItem active={router.pathname === "/Dashboard"  || router.pathname === "/Today"} component={<Link href="/Dashboard" />}> Panel główny</MenuItem>
                        <MenuItem active={router.pathname === "/Products" || router.pathname === "/AddProduct"} component={<Link href="/Products" />}> Produkty </MenuItem>
                        <MenuItem active={router.pathname === "/History"} component={<Link href="/History" />}> Historia </MenuItem>
                        <MenuItem active={router.pathname === "/Profile"} component={<Link href="/Profile" />}> Twój profil </MenuItem>
                        <MenuItem> Wyloguj </MenuItem>
                </Menu>
            </Sidebar>
    )
}