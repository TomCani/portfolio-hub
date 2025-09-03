import Gallery from '../components/Gallery.jsx';
import { IMAGES } from '../data/images.js';

export default function GalleryPage() {
  return (
    <section>
      <header className="mb-4">
        <h2 className="h3 mb-1">Gallery</h2>
        <p className="text-muted mb-0">
          Click any image to open the lightbox. Use <kbd>←</kbd>/<kbd>→</kbd> to navigate, <kbd>Esc</kbd> to close.
        </p>
      </header>
      <Gallery images={IMAGES} />
    </section>
  );
}
