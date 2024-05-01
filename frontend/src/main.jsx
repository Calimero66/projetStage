import React from 'react'
import ReactDOM from 'react-dom/client'


import './index.css'
import { RouterProvider } from 'react-router-dom';


import Router from './router.jsx';
import { ThemeProvider } from "@material-tailwind/react";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={Router} />
    </ThemeProvider>
  </React.StrictMode>
)
