import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="display-6 fw-semibold mb-3">
            React Props + Bootstrap + Routing
          </h1>
          <p className="lead">
            This mini app demonstrates passing props into reusable components,
            styling with Bootstrap (auto dark mode), and navigating with React Router.
          </p>
          <hr className="my-4" />
          <p className="mb-4">
            Head to the Profiles page to see multiple cards rendered from the same
            component with different props.
          </p>
          <Link to="/projects/props-routing/profiles" className="btn btn-primary">See Profiles</Link>
        </div>
      </div>
    </div>
  );
}
