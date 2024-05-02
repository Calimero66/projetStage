import React from 'react'
import iconManagement from '../../icon/logo.png'
import {sidebarLinksAdmin ,dashboardSidebarBottomLinks} from '../Admin/AdminInfo'
import { Link, useLocation } from 'react-router-dom'
// import {LogOut} from 'lucide-react';
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";


const Sidebar = () => {


    // To do : Vue status to know which component it's in
    // cost[vue, setVue] = useState(); 
    // console.log(SidebarLinksAdmin);

    const {localName} = useLocation();


    return (
        <div className=' flex flex-col bg-[#747264]  text-white w-[280px] p-[12px] '>

            <div className=' flex items-center justify-center '>

                <img
                    className=' w-20 h-20 '
                    src={iconManagement}
                    alt='Management'
                />


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
                
                <Link to='/' className='flex flex-grow gap-2 items-center py-2 px-[12px] rounded-md text-red-900 hover:bg-blue-gray-500 active:bg-green-700'>
                    <ArrowRightStartOnRectangleIcon className="h-6 w-6 text-red-900 " />
                    <span>LogOut</span>
                </Link>
            </div>
        </div>
        
    )
}

export default Sidebar