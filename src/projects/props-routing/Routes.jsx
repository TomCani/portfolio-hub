import React from 'react'
import { useRoutes, Outlet } from 'react-router-dom'

// Project components/pages (adjust import paths if your filenames differ)
import DemoNavbar from './components/Navbar'
import Home from './pages/Home'
import Profiles from './pages/Profiles'
import NotFound from './pages/NotFound'

// Optional: if your pages import theme helpers
// import * as theme from './theme'

function ProjectShell() {
  return (
    <>
      {/* This is the project’s own navbar/header */}
      <DemoNavbar />
      {/* Keep project content inside a container for consistent spacing */}
      <div className="container py-4">
        <Outlet />
      </div>
    </>
  )
}

export default function Routes() {
  // These routes are RELATIVE to the hub’s mount point: /projects/props-routing
  // - index route -> /projects/props-routing
  // - 'profiles'  -> /projects/props-routing/profiles
  const element = useRoutes([
    {
      element: <ProjectShell />,
      children: [
        { index: true, element: <Home /> },
        { path: 'profiles', element: <Profiles /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ])

  return element
}
