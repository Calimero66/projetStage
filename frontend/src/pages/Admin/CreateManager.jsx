import React from 'react'

import { BiUserCircle } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";

const CreateManager = () => {
    return (
        <div className='h-[calc(100vh-180px)] flex justify-center items-center'>
            
            <div className='border rounded-md p-16 shadow-lg relative'>
                <h1 className=' text-3xl text-[#3C3633] py-2.5 ' >Create Manager</h1>
                <form action="">

                    <div className=' relative my-4' >

                        <input type="text" name="" id="" className=' block w-72 py-2.3 px-0 text-sm bg-transparent border-0 border-b-2 border-[#3C3633] appearance-none dark:focus:border-[#E0CCBE] focus:outline-non focus:outline-none focus:ring-0 focus-text-white focus:border-[#E0CCBE] peer' />

                        <label htmlFor="" className='absolute text-sm text-[#747264] duration-300 -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-[#E0CCBE] peer-focus:dark:text-[#E0CCBE] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                            your id
                        </label>
                        <AiOutlineLock className=' absolute top-[1px] right-4' />

                    </div>

                    <div className=' relative my-4' >
                        <input type="email" name="" id="" className=' block w-72 py-2.3 px-0 text-sm bg-transparent border-0 border-b-2 border-[#3C3633] appearance-none dark:focus:border-[#E0CCBE] focus:outline-non focus:outline-none focus:ring-0 focus-text-white focus:border-[#E0CCBE] peer' />
                        {/* if u ask about what is the peer in the css check this video => https://www.youtube.com/watch?v=zxMZtqTHuVI&ab_channel=CodinginFlow <= */}
                        <label htmlFor="" className='absolute text-sm text-[#747264] duration-300 -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-[#E0CCBE] peer-focus:dark:text-[#E0CCBE] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                            your name
                        </label>

                        <BiUserCircle
                            className=' absolute top-[1px] right-4'
                        />
                    </div>

                    <div className=' relative my-4' >
                        <input
                            type='tel'
                            name=""
                            id=""
                            className=' block w-72 py-2.3 px-0 text-sm bg-transparent border-0 border-b-2 border-[#3C3633] appearance-none dark:focus:border-[#E0CCBE] focus:outline-non focus:outline-none focus:ring-0 focus-text-white focus:border-[#E0CCBE] peer'
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        />
                        {/* if u ask about what is the peer in the css check this video => https://www.youtube.com/watch?v=zxMZtqTHuVI&ab_channel=CodinginFlow <= */}
                        <label
                            htmlFor=""
                            className='absolute text-sm text-[#747264] duration-300 -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-[#E0CCBE] peer-focus:dark:text-[#E0CCBE] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                            your number
                        </label>

                        <BiUserCircle
                            className=' absolute top-[1px] right-4'
                        />
                    </div>



                    <button className='w-full mb-4 text-[20px] mt-6 rounded-full text-[#3C3633] bg-[#747264] hover:bg-[#3C3633] hover:text-[#E0CCBE] transition-colors duration-380 italic' type="submit" >Save</button>

                </form>
            </div>
        </div>
    )
}

export default CreateManager
