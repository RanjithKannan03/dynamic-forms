'use client';

import React from 'react';
import Form from "@rjsf/mui";
import validator from '@rjsf/validator-ajv8';

const DynamicForm = ({ schema }) => {
    const handleSubmit = ({ formData }) => {
        const fd = new FormData();
        for (var key in formData) {
            fd.append(key, formData['key']);
        }
        fd.append('schema', JSON.stringify(schema));

    };

    return (
        <div className='w-1/2 h-full flex items-center justify-center'>
            {
                schema &&
                <div className='bg-[#ebebeb] flex w-[60%] h-[70%] overflow-y-auto p-10 justify-center items-center'>
                    <Form
                        schema={schema}
                        validator={validator}
                        onSubmit={handleSubmit}
                        onError={(e) => { console.log(e) }}
                    />
                </div>
            }
        </div>
    );
}

export default DynamicForm