import React from 'react'

// List projects once; used by /projects grid and router
export const projects = [
  {
    slug: 'navbar',
    title: 'React Navbar Layout Kit',
    description: 'Bootstrap 5 offcanvas nav, theme toggle, and layout examples.',
    repo: 'https://github.com/TomCani/react-navbar-layout-kit',
    element: React.lazy(() => import('./navbar/Demo.jsx')),
  },
  {
    slug: 'props-routing', // controls the URL: /projects/props-routing
    title: 'React Props + Bootstrap + Routing',
    description: 'Props patterns, Bootstrap UI, and client-side routing.',
    repo: 'https://github.com/TomCani/react-props-bootstrap-routing',
    element: React.lazy(() => import('./props-routing/Routes.jsx')),
  },
  {
    slug: 'data-table',
    title: 'Sortable/Filterable Data Table',
    description: 'Fetch public JSON (users/todos); client-side sort, filter, pagination.',
    repo: 'https://github.com/TomCani/react-data-table', 
    element: React.lazy(() => import('./data-table/Routes.jsx')),
  },
  {
    slug: 'masonry-gallery',
    title: 'Masonry Lightbox Gallery',
    description: 'Responsive masonry grid with lazy-loaded images and a lightbox.',
    repo: 'https://github.com/TomCani/react-masonry-lightbox-gallery',
    element: React.lazy(() => import('./masonry-gallery/Routes.jsx')),
  },
  {
    slug: 'kanban-dnd',
    title: 'Kanban (dnd-kit + localStorage)',
    description: 'Drag-and-drop columns/cards with persistence in localStorage.',
    repo: 'https://github.com/TomCani/kanban-dndkit-localstorage',
    element: React.lazy(() => import('./kanban-dnd/Routes.tsx')),
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
