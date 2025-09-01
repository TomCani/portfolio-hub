import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import ThemeProvider from './context/ThemeContext.jsx'
import SiteLayout from './layouts/SiteLayout.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Resume from './pages/Resume.jsx'
import { projectRoutes } from './projects'  // extensionless import (your file is .jsx)

const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/projects', element: <Projects /> },
      { path: '/resume', element: <Resume /> },
      ...projectRoutes, // e.g. /projects/navbar
      { path: '*', element: <NotFound /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
