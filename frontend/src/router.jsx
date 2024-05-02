import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import SignIn from './pages/Signin';
import Dashboard from './pages/DashboardMainAdmin';
// import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateManager from './pages/Admin/CreateManager';
import CreateAgent from './pages/Admin/CreateAgent';
import CreateClient from './pages/Admin/CreateClient';
import ImportListClients from './pages/Admin/ImportListClients';

const Router = createBrowserRouter([

    {
        path: '/',
        element: <SignIn />
    },
    {
        path: '/Dashboard',
        element: <Dashboard />,   // this is the main layout for the dashboard aka 'dashboardMain'
        children: [
            {
                path: 'CreateManager',
                element: <CreateManager />
            },
            {
                path: 'CreateAgent',
                element: <CreateAgent />
            },
            {
                path: 'CreateClient',
                element: <CreateClient />
            },
            {
                path: 'ImportListClients',
                element: <ImportListClients />
            }
        ]
    }
]);

export default Router;