'use client';

import React, { useState } from 'react';
import Form from "@rjsf/mui";
import validator from '@rjsf/validator-ajv8';
import CodeEditor from '@uiw/react-textarea-code-editor';

const SubmittedForm = ({ form }) => {

    const [copied, setCopied] = useState(false);

    async function handleCopy() {
        await navigator.clipboard.writeText(JSON.stringify(JSON.parse(form.schema), null, 2));
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    return (
        <div className='w-full h-[60vh] flex'>

            <div className='w-1/2 relative flex items-center justify-center'>

                <div className='bg-[#ebebeb] flex w-[60%] h-[90%] overflow-y-auto p-20 justify-center'>

                    <Form
                        schema={JSON.parse(form.schema)}
                        validator={validator}
                        onSubmit={() => { }}
                        onError={(e) => { console.log(e) }}
                    />

                </div>

                <button onClick={handleCopy} className='bg-[#1976D2] text-white p-2 text-sm top-0 right-[5%] absolute rounded cursor-pointer active:bg-[#1565C0]'>
                    {
                        copied ? "Copied" : "Copy Schema"
                    }
                </button>

            </div>

            <div className='w-1/2 flex flex-col gap-5 items-center justify-center'>

                <h1 className='text-white font-semibold text-3xl self-start'>Previous Entries:</h1>

                <div className='w-full h-[90%] flex flex-col gap-10 overflow-y-auto dark-scrollbar'>

                    {
                        form.entries.map((entry, id) => {
                            return (
                                <CodeEditor
                                    key={id}
                                    className='dark-scrollbar'
                                    value={JSON.stringify(JSON.parse(entry), null, 2)}
                                    language="js"
                                    placeholder="Please enter JSON schema for the form."
                                    padding={15}
                                    style={{
                                        fontSize: 16,
                                        backgroundColor: "#27283B",
                                        height: '50%',
                                        width: '100%',
                                        color: "#ebebeb",
                                        overflow: "auto",
                                        fontFamily:
                                            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace"
                                    }}
                                />
                            )
                        })
                    }

                </div>

            </div>

        </div>
    )
}

export default SubmittedForm