'use client';

import React, { useState } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';


const JSON_input = ({ formSchema, setFormSchema }) => {
    const [code, setCode] = useState("");
    const ajv = new Ajv();
    addFormats(ajv);
    const [error, setError] = useState();

    function handleSubmit() {
        if (code == "") {
            setError("Please enter a schema.");
            setTimeout(() => {
                setError(null);
            }, 3000);
        }
        else {
            try {
                const schema = JSON.parse(code);
                ajv.compile(schema);
                setFormSchema(schema);
            }
            catch (e) {
                console.log(e);
                setError("The schmea is invalid.");
                setTimeout(() => {
                    setError(null);
                }, 3000);
            }
        }
    }

    return (
        <div className='w-1/2 h-full flex flex-col gap-5 relative justify-center items-center p-20'>

            {
                error &&
                <p className='absolute top-5 left-1/2 text-red-500'>{error}</p>
            }

            <CodeEditor
                className='dark-scrollbar'
                value={code}
                language="json"
                placeholder="Please enter JSON schema for the form."
                onChange={(env) => {
                    setCode(env.target.value);
                }}
                padding={15}
                style={{
                    fontSize: 16,
                    backgroundColor: "#27283B",
                    height: '100%',
                    width: '100%',
                    color: "#ebebeb",
                    overflow: "auto",
                    fontFamily:
                        "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace"
                }}
            />

            <button onClick={handleSubmit} className='bg-[#1976D2] text-white py-4 px-3 rounded cursor-pointer active:bg-[#1565C0]'>
                Create Form
            </button>
        </div>
    )
}

export default JSON_input