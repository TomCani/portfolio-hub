import React from 'react'

// List projects once; used by /projects grid and router
export const projects = [
  {
    slug: 'navbar',
    title: 'React Navbar Layout Kit',
    description: 'Bootstrap 5 offcanvas nav, theme toggle, and layout examples.',
    repo: 'https://github.com/TomCani/react-navbar-layout-kit',
    // lazily load the demo page
    element: React.lazy(() => import('./navbar/Demo.jsx')),
  },
  {
    slug: 'props-routing', // controls the URL: /projects/props-routing
    title: 'React Props + Bootstrap + Routing',
    description: 'Props patterns, Bootstrap UI, and client-side routing.',
    repo: 'https://github.com/TomCani/react-props-bootstrap-routing',
    // Local embedded demo with nested routes
    element: React.lazy(() => import('./props-routing/Routes.jsx')),
  },
]

// Turn registry into Router routes
export const projectRoutes = projects
  .filter(p => p.element)
  .map(p => ({
    path: `/projects/${p.slug}/*`,
    element: (
      <React.Suspense fallback={<div className="container py-5">Loading…</div>}>
        <p.element />
      </React.Suspense>
    ),
}))
