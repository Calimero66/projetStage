import React from 'react'

import { BiUserCircle } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";
import { Checkbox } from "@material-tailwind/react";

import logo from './../icon/G-logo.png'


const SignIn = () => {

    return (
        <>
            <div className='flex justify-center items-center bg-[#747264]  h-[45px]  '>

                <img className='h-[35px] py-1' src={logo} alt="G-logo" />

            </div>
            <div className='h-[calc(100vh-45px)] flex justify-center items-center'>
                <div className='border rounded-md p-8 shadow-lg relative'>
                    <h1 className=' text-3xl text-[#3C3633] py-2.5 ' >Sign In</h1>
                    <form action="">

                        <div className=' relative my-4' >
                            <input type="email" name="" id="" className=' block w-72 py-2.3 px-0 text-sm bg-transparent border-0 border-b-2 border-[#3C3633] appearance-none dark:focus:border-[#E0CCBE] focus:outline-non focus:outline-none focus:ring-0 focus-text-white focus:border-[#E0CCBE] peer' />
                            {/* if u ask about what is the peer in the css check this video => https://www.youtube.com/watch?v=zxMZtqTHuVI&ab_channel=CodinginFlow <= */}
                            <label htmlFor="" className='absolute text-sm text-[#747264] duration-300 -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-[#E0CCBE] peer-focus:dark:text-[#E0CCBE] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'> your email</label>
                            <BiUserCircle className=' absolute top-[1px] right-4' />
                        </div>

                        <div className=' relative my-4' >
                            <input type="password" name="" id="" className=' block w-72 py-2.3 px-0 text-sm bg-transparent border-0 border-b-2 border-[#3C3633] appearance-none dark:focus:border-[#E0CCBE] focus:outline-non focus:outline-none focus:ring-0 focus-text-white focus:border-[#E0CCBE] peer' />
                            {/* if u ask about what is the peer in the css check this video => https://www.youtube.com/watch?v=zxMZtqTHuVI&ab_channel=CodinginFlow <= */}
                            <label htmlFor="" className='absolute text-sm text-[#747264] duration-300 -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-[#E0CCBE] peer-focus:dark:text-[#E0CCBE] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'> your password</label>
                            <AiOutlineLock className=' absolute top-[1px] right-4' />
                        </div>

                        <div className='flex justify-between items-center  '>
                            <div className='flex gap-2 items-center h-5 '>
                                {/* <input type='checkbox' name="" id="" /> */}
                                <Checkbox
                                    // defaultChecked      // if you want it to be checked by default
                                    ripple={false}
                                    className="h-4 w-4 mx-[-8px] rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                                />
                                <label htmlFor="" className=' text-[#3C3633] ' >Remember me </label>
                            </div>
                            {/* <span className=' text-[#3C3633] font-semibold ' > <Link to='/ForgotPassword'>Forgot password </Link></span> */}  {/* i will add this later if i need it  */}
                        </div>

                        <button className='w-full mb-4 text-[20px] mt-6 rounded-full text-[#3C3633] bg-[#747264] hover:bg-[#3C3633] hover:text-[#E0CCBE] transition-colors duration-380 italic' type="submit" >Log in</button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default SignIn