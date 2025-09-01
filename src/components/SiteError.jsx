import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom';

export default function SiteError() {
  const err = useRouteError();

  if (isRouteErrorResponse(err)) {
    // Router 404/500 style errors
    return (
      <main className="container py-5">
        <h1 className="h3 fw-bold mb-2">{err.status} {err.statusText}</h1>
        <p className="text-body-secondary mb-4">{err.data || 'Something went wrong.'}</p>
        <Link className="btn btn-primary" to="/">Back to Home</Link>
      </main>
    );
  }

  // Render-time exceptions
  const msg = err?.message || 'Unexpected error';
  return (
    <main className="container py-5">
      <h1 className="h3 fw-bold mb-2">Something went wrong</h1>
      <p className="text-body-secondary">{msg}</p>
      <div className="mt-4 d-flex gap-2">
        <button className="btn btn-primary" onClick={() => location.reload()}>Reload</button>
        <Link className="btn btn-outline-secondary" to="/">Back to Home</Link>
      </div>
    </main>
  );
}
