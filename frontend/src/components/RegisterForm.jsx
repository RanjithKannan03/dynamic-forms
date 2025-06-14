'use client';

import React, { useActionState } from 'react';
import Link from 'next/link';
import AuthFormSubmitButton from './AuthFormButton';
import { redirect } from 'next/navigation';

const RegisterForm = ({ action }) => {

    async function handleSubmit(prev, formData) {
        const response = await action(formData);
        if (response.error) {
            return { error: response.message }
        }
        else {
            sessionStorage.setItem("userId", response.userId);
            redirect('/');
        }
    }

    const [state, formAction] = useActionState(handleSubmit, {})

    return (
        <div className='flex w-full lg:w-[40%] xl:w-[30%] flex-col gap-4 p-4 text-white font-montserrat relative'>


            <span className="text-3xl font-semibold text-center md:text-4xl lg:text-5xl">Register</span>

            {
                state.error && <span className='w-full text-sm text-red-400 font-extralight'>
                    {state.error}
                </span>
            }

            <span className="">
                Existing User?{" "}
                <span className='text-[#1976D2]'>
                    <Link href={"/login"}>
                        Login
                    </Link>
                </span>
            </span>

            <form className='flex flex-col gap-4' action={formAction}>

                <div className="relative items-center w-full px-2 py-1 border border-gray-200 rounded-md 0 focus-within:ring-1 focus-within:ring-black">
                    <input
                        type="text"
                        id="floating_outlined_email"
                        name="name"
                        className="peer w-full appearance-none bg-transparent px-2.5 pb-2.5 pt-4 text-sm focus:outline-0 "
                        placeholder=" "
                    />
                    <label
                        htmlFor="floating_outlined_email"
                        className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform  px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4  dark:text-gray-400 peer-focus:text-white peer-focus:bg-[#1976D2]"
                    >
                        Name
                    </label>
                </div>

                <div className="relative items-center w-full px-2 py-1 border border-gray-200 rounded-md 0 focus-within:ring-1 focus-within:ring-black">
                    <input
                        type="text"
                        id="floating_outlined_email"
                        name="email"
                        className="peer w-full appearance-none bg-transparent px-2.5 pb-2.5 pt-4 text-sm focus:outline-0 "
                        placeholder=" "
                    />
                    <label
                        htmlFor="floating_outlined_email"
                        className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform  px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4  dark:text-gray-400 peer-focus:text-white peer-focus:bg-[#1976D2]"
                    >
                        Email
                    </label>
                </div>

                <div className="relative flex items-center w-full px-2 py-1 border border-gray-200 rounded-md 0 focus-within:ring-1 focus-within:ring-black">
                    <input
                        type="password"
                        name="password"
                        autoComplete="off"
                        id="floating_outlined_pass"
                        className="peer flex-1 appearance-none bg-transparent px-2.5 pb-2.5 pt-4 text-sm focus:outline-0 "
                        placeholder=" "
                    />
                    <label
                        htmlFor="floating_outlined_pass"
                        className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4  scale-75 transform px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-white rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:bg-[#1976D2]"
                    >
                        Password
                    </label>
                </div>

                <AuthFormSubmitButton text="Register" />

            </form>


        </div>
    )
}

export default RegisterForm