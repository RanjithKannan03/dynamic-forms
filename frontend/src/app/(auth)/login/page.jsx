import LoginForm from '@/components/LoginForm';
import React from 'react';
import { login } from '@/actions/auth-actions';

const page = () => {
    return (
        <div className='w-full h-full flex items-center justify-center'>

            <LoginForm action={login} />

        </div>
    )
}

export default page