'use client';

import Link from 'next/link';
import { redirect, usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const path = usePathname();

    function handleSubmit() {
        sessionStorage.clear();
        redirect('/login');
    }

    return (
        <div className='flex justify-between items-center w-full h-ull'>

            <h1 className='text-white text-2xl font-bold'>Dynamic Forms</h1>

            <div className='flex items-center gap-5'>

                <Link href={'/'} className={`text-lg ${path == '/' ? "text-[#1a83ec] font-semibold" : "text-white"}`}>Create Form</Link>

                <Link href={'/myForms'} className={`text-lg ${path == '/myForms' ? "text-[#1a83ec] font-semibold" : "text-white"}`}>View Forms</Link>

                <button className='text-lg text-white cursor-pointer' type='button' onClick={handleSubmit}>Logout</button>

            </div>

        </div>
    )
}

export default Navbar