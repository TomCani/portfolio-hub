import { Link } from "react-router-dom";

const BASE = '/projects/data-table'; // anchor all links to this base

export default function Home() {
  return (
    <section>
      <div className="p-4 p-md-5 mb-4 bg-body-secondary rounded-3">
        <h1 className="display-6 fw-bold">Sortable/Filterable Data Table</h1>
        <p className="lead mb-0">
          Client-side sorting, filtering, and pagination on public JSON data (Users & Todos).
        </p>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Users Table</h5>
              <p className="card-text">Search by name/email/company; click headers to sort; paginate.</p>
              <Link to={`${BASE}/users`} className="btn btn-primary">Open Users</Link>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Todos Table</h5>
              <p className="card-text">Filter by title or completion; sort & paginate.</p>
              <Link to={`${BASE}/todos`} className="btn btn-primary">Open Todos</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
