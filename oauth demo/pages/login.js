import React, { useState } from 'react'

import { loginWithAbc } from '../utils/func'

const login = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='flex flex-col items-center gap-4 border-solid border-[1px] shadow-md rounded-md px-[50px] py-[50px] w-[400px]'>
                <h1 className='text-[#686de0] text-[25px] italic select-none'>
                    Đăng nhập
                </h1>

                <div className='flex justify-start w-full'>
                    <div
                        onClick={() => {
                            loginWithAbc()
                        }}
                        className='cursor-pointer flex items-center justify-start border-solid border-[2px] border-[#3c5a79] w-full rounded-sm'
                    >
                        <img
                            className='w-[50px] h-[50px]'
                            src='/abc_logo.png'
                        />
                        <span className='text-[25px] text-[#3c5a79] t w-full h-full flex items-center justify-center '>
                            ABC
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default login
