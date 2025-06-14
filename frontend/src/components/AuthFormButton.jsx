'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';
import Loading from './Loading';

const AuthFormSubmitButton = ({ text }) => {
    const status = useFormStatus();
    return (
        <div className='w-full p-3 text-white text-xltransition-all bg-[#1976D2] hover:bg-[#1565C0] rounded-lg'>
            {
                status.pending ?
                    <div className='relative w-full'>
                        <span className='opacity-0'>{text}</span>
                        <Loading />
                    </div>
                    :
                    <button id='login-bth' className='w-full cursor-pointer'>
                        {text}
                    </button>
            }
        </div>
    )
}

export default AuthFormSubmitButton