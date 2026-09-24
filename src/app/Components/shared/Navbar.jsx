import Image from 'next/image';
import React from 'react';
import logo from "../../assets/book.ico";

const Navbar = () => {
    const links = <>
        <li><a className="font-semibold text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/80 rounded-xl transition-all duration-200 py-2.5 px-4 text-base">Item 1</a></li>
        <li><a className="font-semibold text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/80 rounded-xl transition-all duration-200 py-2.5 px-4 text-base">Item 3</a></li>
    </>
    
    return (
        <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 shadow-sm">
            <div className="navbar bg-transparent container mx-auto px-11 py-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-slate-100/80 rounded-xl mr-2">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-white/95 backdrop-blur-lg rounded-2xl z-50 mt-3 w-56 p-3 shadow-xl border border-slate-100 space-y-1">
                            {links}
                        </ul>
                    </div>
                    <div className='flex gap-3 items-center cursor-pointer group'>
                        <div className="p-2 bg-indigo-50 rounded-xl group-hover:scale-105 transition-transform duration-200">
                            <Image src={logo} alt='no img'></Image>
                        </div>
                        <span className="font-extrabold text-2xl tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors duration-200">Book Vibe</span>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <button className="btn btn-success text-white font-semibold rounded-xl px-6 shadow-md shadow-emerald-200/60 active:scale-95 transition-all">Sign in</button>
                    <button className="btn btn-error text-white font-semibold rounded-xl px-6 shadow-md shadow-rose-200/60 active:scale-95 transition-all">Sign up</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;