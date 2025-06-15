import React from 'react';
import SubmittedForm from './SubmittedForm';

const FormView = ({ forms }) => {
    return (
        <div className='w-full flex flex-col gap-5'>
            {
                forms.map((form, id) => {
                    return <SubmittedForm form={form} key={id} />
                })
            }
        </div>
    )
}

export default FormView