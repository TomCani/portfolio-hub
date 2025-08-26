import { Link } from 'react-router-dom'
import { projects } from '../projects'

export default function Home() {
  const featured = projects.slice(0, 3) // pick top 3 for the hero section

  return (
    <>
      {/* Hero */}
      <section className="border-bottom" style={{ background:
        'linear-gradient(180deg, var(--bs-body-bg), transparent)' }}>
        <div className="container py-5 py-lg-6">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <h1 className="display-5 fw-bold lh-1 mb-3">
                Building clean, practical React UIs
              </h1>
              <p className="lead text-body">
                I design and code reusable component kits and production-ready layouts:
                fast Vite builds, Bootstrap theming, and DX that scales.
              </p>
              <div className="d-flex gap-2 mt-3">
                <Link to="/projects" className="btn btn-primary btn-lg">
                  Explore Projects
                </Link>
                <Link to="/resume" className="btn btn-outline-secondary btn-lg">
                  View Resume
                </Link>
              </div>
              <div className="d-flex flex-wrap gap-2 mt-4">
                <span className="badge text-bg-light border">React 18</span>
                <span className="badge text-bg-light border">Vite</span>
                <span className="badge text-bg-light border">Bootstrap 5.3</span>
                <span className="badge text-bg-light border">UX Patterns</span>
              </div>
            </div>
            <div className="col-lg-5 text-lg-end">
              {/* optional: drop in a simple hero illustration/screenshot */}
              {/* <img className="img-fluid rounded shadow-sm" src="/hero.png" alt="Preview" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="container py-5">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h2 className="h4 mb-0">Featured</h2>
          <Link to="/projects" className="btn btn-sm btn-outline-primary">View all</Link>
        </div>

        <div className="row g-3">
          {featured.map(p => (
            <div key={p.slug} className="col-md-6 col-lg-4">
              <div className="card h-100">
                <div className="card-body d-flex flex-column">
                  <h3 className="h5">{p.title}</h3>
                  <p className="text-body small mb-3">{p.description}</p>
                  <div className="mt-auto d-flex gap-2">
                    <Link className="btn btn-sm btn-primary" to={`/projects/${p.slug}`}>Open</Link>
                    {p.repo && <a className="btn btn-sm btn-outline-dark" href={p.repo} target="_blank" rel="noreferrer">Code</a>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
