import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="row g-4 align-items-center">
      <div className="col-12 col-lg-6">
        <h1 className="display-5 fw-bold">Masonry Gallery + Lightbox</h1>
        <p className="lead">
          A responsive image gallery using CSS masonry columns, with lazy-loaded images and an accessible lightbox.
          Fully keyboard navigable, Bootstrap-styled, and dark-mode compatible with your hub.
        </p>
        <div className="d-flex gap-2">
          <Link className="btn btn-primary" to="gallery">Open Gallery</Link>
          <a className="btn btn-outline-primary" href="https://picsum.photos" target="_blank" rel="noreferrer">
            Using picsum.photos images
          </a>
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <ul className="list-unstyled mb-0">
          <li>• <strong>Masonry</strong> via CSS columns (no extra lib)</li>
          <li>• <strong>Lazy loading</strong> via IntersectionObserver</li>
          <li>• <strong>Lightbox</strong> with focus trap & keyboard nav</li>
          <li>• <strong>Accessible</strong> ARIA roles/labels</li>
        </ul>
      </div>
    </section>
  );
}
