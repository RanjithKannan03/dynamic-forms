'use client';

import React, { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';

const SessionHandler = ({ children }) => {
    const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
        if (!sessionStorage.getItem("userId")) {
            redirect('/login');
        }
        else {
            setHydrated(true);
        }
    }, []);


    return (
        hydrated ? <div className='w-full h-full'>
            {
                children
            }
        </div> :
            <div className='w-full h-full'></div>
    )
}

export default SessionHandler