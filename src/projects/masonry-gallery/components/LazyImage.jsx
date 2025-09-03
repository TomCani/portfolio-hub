import { useEffect, useRef, useState } from 'react';

export default function LazyImage({ src, width, height, alt, onClick }) {
  const ref = useRef(null);
  const [loadedSrc, setLoadedSrc] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If already in viewport (fast path)
    if ('loading' in HTMLImageElement.prototype) {
      // Native lazy works fine too, but we still gate src assignment for control
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoadedSrc(src);
            io.disconnect();
          }
        });
      },
      { rootMargin: '200px' } // pre-load slightly before visible
    );

    io.observe(el);
    return () => io.disconnect();
  }, [src]);

  return (
    <button
      ref={ref}
      className="border-0 bg-transparent p-0 w-100 masonry-item"
      onClick={onClick}
      aria-label={`Open image: ${alt}`}
      style={{ cursor: 'zoom-in' }}
    >
      <div
        className={`ratio img-skeleton ${isLoaded ? '' : 'placeholder'}`}
        style={{
          // maintain aspect ratio with Bootstrap's ratio helper
          '--bs-aspect-ratio': `${(height / width) * 100}%`,
          borderRadius: '.5rem',
          overflow: 'hidden',
        }}
      >
        {loadedSrc && (
          <img
            src={loadedSrc}
            loading="lazy"
            decoding="async"
            alt={alt}
            width={width}
            height={height}
            onLoad={() => setIsLoaded(true)}
            className="w-100 h-100 object-fit-cover"
          />
        )}
      </div>
    </button>
  );
}
