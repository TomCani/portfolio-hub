import { useCallback, useState } from 'react';
import LazyImage from './LazyImage.jsx';
import Lightbox from './Lightbox.jsx';

export default function Gallery({ images }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openAt = useCallback((idx) => setLightboxIndex(idx), []);
  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);
  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  return (
    <>
      <div className="masonry">
        {images.map((img, idx) => (
          <LazyImage
            key={img.id}
            src={img.src}
            width={img.width}
            height={img.height}
            alt={img.alt}
            onClick={() => openAt(idx)}
          />
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}
