import { Link } from 'react-router-dom'
import { projects } from '../projects'

export default function Projects() {
  const items = [...projects].reverse();

  return (
    <main className="container py-5">
      <h1 className="fw-bold mb-4">Projects</h1>
      <div className="row g-3">
        {items.map(p => (
          <div key={p.slug} className="col-md-6 col-lg-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="text-body-secondary small mb-3">{p.description}</p>
                <div className="d-flex gap-2">
                  <Link className="btn btn-sm btn-primary" to={`/projects/${p.slug}`}>Open</Link>
                  {p.repo && (
                    <a
                      className="btn btn-sm btn-outline-primary"
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
