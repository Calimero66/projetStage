import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'


const Dashboard = () => {
    return (
        <>
            
            <div className='flex flex-row overflow-hidden h-screen w-screen'>
                <Sidebar />
                <div className=' p-4 '>
                    <div className=' bg-brown-500 w-full border-black '>chi l3iba</div>
                    <Outlet />
                </div>
            </div>
            
        </>
    )
}

export default Dashboard