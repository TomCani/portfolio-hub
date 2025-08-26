import { NavLink, Link, Outlet, useLocation } from 'react-router-dom'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext.jsx'

export default function SiteLayout() {
  const { pathname } = useLocation()
  const inProject = pathname.startsWith('/projects/') && pathname !== '/projects'
  const { theme, toggleTheme } = useContext(ThemeContext)

  const linkClass = ({ isActive }) =>
    'nav-link' + (isActive ? ' active fw-semibold' : '')

  return (
    <>
      {/* Sticky, theme-aware top bar */}
      <Navbar className="border-bottom bg-body sticky-top" expand="md">
        <Container>
          <Navbar.Brand as={Link} to="/">Thomas Cani</Navbar.Brand>
          <Navbar.Toggle aria-controls="site-nav" />
          <Navbar.Collapse id="site-nav">
            <Nav className="ms-auto align-items-center gap-2">
              <NavLink to="/" end className={linkClass}>Home</NavLink>
              <NavLink to="/projects" className={linkClass}>Projects</NavLink>
              <NavLink to="/resume" className={linkClass}>Resume</NavLink>
              <Button size="sm" variant="outline-secondary" onClick={toggleTheme}>
                {theme === 'light' ? 'Dark' : 'Light'}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {inProject && (
        <div className="border-bottom bg-body-tertiary">
          <Container className="py-2">
            <Link className="text-decoration-none" to="/projects">← Back to Projects</Link>
          </Container>
        </div>
      )}

      <Outlet />

      <footer className="border-top bg-body-tertiary">
        <Container className="py-4 small d-flex flex-wrap gap-3 justify-content-between">
          <span className="text-body">© {new Date().getFullYear()} Thomas Cani</span>
          <div className="d-flex gap-3">
            <a className="link-body-emphasis" href="https://github.com/TomCani" target="_blank" rel="noreferrer">
              <i className="bi bi-github"></i> GitHub
            </a>
            <a className="link-body-emphasis" href="thomascx5@gmail.com">
              <i className="bi bi-envelope"></i> Contact
            </a>
          </div>
        </Container>
      </footer>
    </>
  )
}
