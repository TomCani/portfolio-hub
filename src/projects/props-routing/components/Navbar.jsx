import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-bs-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-bs-theme", next);
    try { localStorage.setItem("theme", next); } catch {}
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
      <div className="container">
        {/* IMPORTANT: use a RELATIVE link so it stays under /projects/props-routing */}
        <Link className="navbar-brand fw-bold" to=".">
          Props + Bootstrap
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* RELATIVE route; 'end' so it’s active only on the index */}
              <NavLink
                end
                to=".."
                className={({ isActive }) => "nav-link" + (isActive ? " active fw-semibold" : "")}
              >
                Demo Home
              </NavLink>
            </li>
            <li className="nav-item">
              {/* RELATIVE route to nested page */}
              <NavLink
                to="profiles"
                className={({ isActive }) => "nav-link" + (isActive ? " active fw-semibold" : "")}
              >
                Profiles
              </NavLink>
            </li>
          </ul>

          {/* Dark mode toggle */}
          <button
            onClick={toggleTheme}
            className="btn btn-outline-secondary ms-lg-3"
          >
            Dark Mode
          </button>
        </div>
      </div>
    </nav>
  );
}
