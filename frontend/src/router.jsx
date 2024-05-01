import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import SignIn from './pages/Signin';
import Dashboard from './pages/DashboardMain';
import AdminDashboard from './pages/Dashboard/Admin/AdminDashboard';
import AgentDashboard from './pages/Dashboard/Agent/AgentDashboard';
import ManagerDashboard from './pages/Dashboard/Manager/ManagerDashboard';

const Router = createBrowserRouter([

    {
        path: '/',
        element: <SignIn />
    },
    {
        path: 'Dashboard',
        element: <Dashboard />,   // this is the main layout for the dashboard aka 'dashboardMain'
        children: [
            {
                path: 'AdminDashboard',
                element: <AdminDashboard />
            }
            , {
                path: 'AgentDashboard',
                element: <AgentDashboard />
            }
            , {
                path: 'ManagerDashboard',
                element: <ManagerDashboard />
            }
        ]
    }
]);

export default Router;
