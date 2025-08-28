import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-5 mb-3">404</h1>
      <p className="lead mb-4">The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="btn btn-outline-primary">
        Go Home
      </Link>
    </div>
  );
}
