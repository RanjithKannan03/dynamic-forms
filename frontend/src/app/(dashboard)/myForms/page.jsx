'use client';

import { getUserForms } from '@/actions/form-actions';
import FormView from '@/components/FormView';
import Loading from '@/components/Loading';
import React, { useEffect, useState } from 'react';

const page = () => {

    const [forms, setForms] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await getUserForms(sessionStorage.getItem('userId'));
            setForms(response.forms);
        }
        fetchData();
    }, [])

    return (
        <div className='w-full h-full overflow-y-auto relative dark-scrollbar p-20'>
            {
                forms === null || forms === undefined ? (
                    <Loading />
                ) : forms.length > 0 ? (
                    <FormView forms={forms} />
                ) : (
                    <div className='text-white'>Empty</div>
                )
            }
        </div>
    )
}

export default page