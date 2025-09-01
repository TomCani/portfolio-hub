import { NavLink, Link } from 'react-router-dom';

const BASE = '/projects/data-table'; // anchor all links to this base

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
      <div className="container">
        <Link className="navbar-brand fw-bold" to={BASE}>
          Data Table
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dtNav"
          aria-controls="dtNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="dtNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to={BASE}
                end
                className={({ isActive }) => 'nav-link' + (isActive ? ' active fw-semibold' : '')}
              >
                Demo Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`${BASE}/users`}
                className={({ isActive }) => 'nav-link' + (isActive ? ' active fw-semibold' : '')}
              >
                Users
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`${BASE}/todos`}
                className={({ isActive }) => 'nav-link' + (isActive ? ' active fw-semibold' : '')}
              >
                Todos
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
