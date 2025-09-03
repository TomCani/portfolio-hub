import { useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import VisuallyHidden from './VisuallyHidden.jsx';

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const modalRoot = document.getElementById('modal-root') || document.body;
  const closeRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const active = images[index];

  // Remember last focused element to restore on close
  const lastFocused = useRef(null);

  // Compose label/description ids
  const ids = useMemo(() => {
    const uid = `lb-${active?.id ?? 'x'}`;
    return {
      title: `${uid}-title`,
      desc: `${uid}-desc`,
    };
  }, [active]);

  useEffect(() => {
    lastFocused.current = document.activeElement;

    const onKey = (e) => {
      if (e.key === 'Escape') { e.preventDefault(); onClose(); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); onNext(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); onPrev(); }
      else if (e.key === 'Tab') {
        // Simple focus trap across prev/close/next
        const focusables = [prevRef.current, closeRef.current, nextRef.current].filter(Boolean);
        const idx = focusables.indexOf(document.activeElement);
        if (e.shiftKey) {
          const target = focusables[(idx - 1 + focusables.length) % focusables.length];
          target?.focus();
          e.preventDefault();
        } else {
          const target = focusables[(idx + 1) % focusables.length];
          target?.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', onKey);
    // On mount, focus close button
    setTimeout(() => closeRef.current?.focus(), 0);

    // Prevent background scroll
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      lastFocused.current?.focus?.();
    };
  }, [onClose, onNext, onPrev]);

  if (!active) return null;

  const handleBackdrop = (e) => {
    if (e.currentTarget === e.target) onClose();
  };

  return createPortal(
    <div
      className="lightbox-backdrop"
      onMouseDown={handleBackdrop}
      aria-hidden={false}
    >
      <div
        className="lightbox-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={ids.title}
        aria-describedby={ids.desc}
      >
        <div className="lightbox-header d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <span id={ids.title} className="fw-semibold">
              Image {index + 1} of {images.length}
            </span>
            <VisuallyHidden>Press Left/Right to navigate, Esc to close.</VisuallyHidden>
          </div>
          <div className="btn-group">
            <button
              ref={prevRef}
              type="button"
              className="btn btn-outline-secondary"
              onClick={onPrev}
              aria-label="Previous image (Left Arrow)"
            >
              ← Prev
            </button>
            <button
              ref={closeRef}
              type="button"
              className="btn btn-primary"
              onClick={onClose}
              aria-label="Close lightbox (Esc)"
            >
              Close
            </button>
            <button
              ref={nextRef}
              type="button"
              className="btn btn-outline-secondary"
              onClick={onNext}
              aria-label="Next image (Right Arrow)"
            >
              Next →
            </button>
          </div>
        </div>

        <div className="lightbox-body">
          <img
            src={active.src}
            className="lightbox-img"
            width={active.width}
            height={active.height}
            alt={active.alt}
          />
        </div>

        <div id={ids.desc} className="lightbox-footer d-flex justify-content-between align-items-center">
          <div className="text-muted small">
            {active.alt}
          </div>
          <div className="small">
            <kbd>←</kbd>/<kbd>→</kbd> navigate • <kbd>Esc</kbd> close
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
}
