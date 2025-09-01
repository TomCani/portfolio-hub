import { Component } from 'react';

export default class ProjectErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    // optional: send to analytics/logging
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="container py-5">
          <h2 className="h4 fw-bold mb-2">Something went wrong in this demo</h2>
          <p className="text-body-secondary">{String(this.state.error?.message || 'Unknown error')}</p>
          <button className="btn btn-primary mt-3" onClick={() => this.setState({ hasError: false, error: null })}>
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
