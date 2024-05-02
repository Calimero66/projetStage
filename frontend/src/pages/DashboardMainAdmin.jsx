import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import HeaderSearch from './components/HeaderSearch'


const Dashboard = () => {
    return (
        <>
            
            <div className='flex flex-row overflow-hidden h-screen w-screen'>
                <Sidebar />
                <div className=' w-full'>
                    {/* <div className=' bg-brown-500 w-full border-black '>
                        
                    </div> */}
                    <div>
                    <HeaderSearch />
                    </div>
                    <div className= "p-4 ">
                        <Outlet />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Dashboard