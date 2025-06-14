import RegisterForm from '@/components/RegisterForm';
import React from 'react';
import { register } from '@/actions/auth-actions';

const page = () => {
    return (
        <div className='w-full h-full flex items-center justify-center'>

            <RegisterForm action={register} />
        </div>
    )
}

export default page