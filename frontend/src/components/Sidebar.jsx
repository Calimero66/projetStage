import React from 'react'
import iconManagement from '../icon/management.png'
import {sidebarLinksAdmin ,dashboardSidebarBottomLinks} from '../pages/Dashboard/Admin/AdminInfo'
import { Link, useLocation } from 'react-router-dom'
import {LogOut} from 'lucide-react';


const Sidebar = () => {


    // To do : Vue status to know which component it's in
    // cost[vue, setVue] = useState(); 
    // console.log(SidebarLinksAdmin);

    const {localName} = useLocation();


    return (
        <div className=' flex flex-col bg-[#747264]  text-white w-[280px] p-[12px] '>

            <div className=' flex gap-2 items-center px-1 py-5'>

                <img
                    className=' w-[20px] h-[20px] '
                    src={iconManagement}
                    alt='Management'
                />
                

                <span> Absence Management </span>

            </div>

            <div className=' flex flex-col flex-1 py-8 '>
                
                {sidebarLinksAdmin.map((item) => (
                    <div key={item.key} >
                        <Link to={item.path} className={`flex flex-grow gap-2 items-center py-2 px-3 hover:bg-blue-gray-500 active:bg-green-700 rounded-md  ${location.pathname === item.path && 'text-black bg-blue-500'}`}>
                            {item.icon}
                            {item.label}
                        </Link>
                    </div>
                ))}
            </div>

            <div className='flex flex-col px-2 border-t-2'>
                {/* Bottom SideBar */}
                {dashboardSidebarBottomLinks.map((item) => (
                    <div key={item.key} >
                        <Link to={item.path} className={`flex flex-grow gap-2 items-center py-2 px-3 hover:bg-blue-gray-500 active:bg-green-700 rounded-md  ${location.pathname === item.path && 'text-black bg-blue-500'}`}>
                            {item.icon}
                            {item.label}
                        </Link>
                    </div>
                ))}
                
                <Link to='/' className='flex flex-grow gap-2 items-center py-2 text-red-900'>
                    <LogOut />
                    <span>LogOut</span>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar
