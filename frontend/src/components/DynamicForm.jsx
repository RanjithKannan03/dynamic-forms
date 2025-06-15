'use client';

import React, { useState } from 'react';
import Form from "@rjsf/mui";
import validator from '@rjsf/validator-ajv8';
import { submitForm } from '@/actions/form-actions';

const DynamicForm = ({ schema }) => {

    const [loading, setLoading] = useState(false);

    const handleSubmit = async ({ formData }) => {

        setLoading(true);

        const userId = sessionStorage.getItem("userId");

        const payload = {
            response: JSON.stringify(formData),
            schema: JSON.stringify(schema),
            userId: userId
        }

        const response = await submitForm(payload);
        setLoading(false);
    };

    return (
        <div className='w-1/2 h-full flex items-center justify-center'>
            {
                schema &&
                <div className='bg-[#ebebeb] flex w-[60%] h-[70%] overflow-y-auto p-10 justify-center items-center'>
                    {
                        loading ?
                            <div className='flex items-center justify-center w-full h-full'>
                                <div className="animate-spin inline-block size-10 border-[3px] border-current border-t-transparent rounded-full text-[#1976D2]" role="status" aria-label="loading">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                            :
                            <Form
                                schema={schema}
                                validator={validator}
                                onSubmit={handleSubmit}
                                onError={(e) => { console.log(e) }}
                            />
                    }
                </div>
            }
        </div>
    );
}

export default DynamicForm