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
  // add more { slug, title, description, repo, element } here
]

// Turn registry into Router routes
export const projectRoutes = projects.map(p => ({
  path: `/projects/${p.slug}`,
  element: (
    <React.Suspense fallback={<div className="container py-5">Loading…</div>}>
      <p.element />
    </React.Suspense>
  ),
}))
