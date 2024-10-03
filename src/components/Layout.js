import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import CartTab from './CartTab';
import { useSelector } from 'react-redux';
import { store } from '../stores';

const Layout = () => {
    const statusTabCart = useSelector(store => store.cart.statusTab);
    return (
        <div className='bg-zinc-200'>
            <main className={`w-[1200px] max-w-full m-auto p-5 ${statusTabCart ===false ? "" : "-translate-x-56"}`}>
                <Header />
                <Outlet />
            </main>
            <CartTab />
        </div>
    );
}

export default Layout;
