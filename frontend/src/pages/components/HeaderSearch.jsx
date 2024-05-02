import React from 'react'
import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/outline";

const HeaderSearch = () => {
    return (
        <>
            <div className=' flex justify-between items-center border-white border-b bg-[#EEEDEB] h-16 px-4 '>
                <div className=' relative '>

                    <MagnifyingGlassIcon className=' absolute pl-2 h-7 w-7 text-gray-400 bottom-[5px]' />
                    <input
                        type="text"
                        placeholder='Search....'
                        className=' border border-gray-400 text-sm h-10 w-[24rem] px-9 rounded-lg focus:outline-none active:outline-none'

                    />

                </div>

                <div className=' '>
                    <BellIcon className="h-6 w-6 text-gray-500" />

                </div>

            </div>


        </>
    )
}

export default HeaderSearch
