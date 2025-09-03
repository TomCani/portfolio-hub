import { useEffect } from 'react';

/**
 * Syncs Bootstrap theme with:
 * 1) localStorage keys your hub likely uses ('theme' or 'color-mode'/'colorMode'),
 * 2) root attribute data-bs-theme,
 * 3) system preference as a fallback.
 *
 * No toggle button here; this just listens and applies.
 */
export default function useThemeSync() {
  useEffect(() => {
    const doc = document.documentElement;

    const detectTheme = () => {
      const stored =
        localStorage.getItem('theme') ||
        localStorage.getItem('color-mode') ||
        localStorage.getItem('colorMode');

      if (stored === 'dark' || stored === 'light') {
        doc.setAttribute('data-bs-theme', stored);
        return;
      }

      // Fallback to existing attribute or system
      const existing = doc.getAttribute('data-bs-theme');
      if (existing) return;

      const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
      doc.setAttribute('data-bs-theme', prefersDark ? 'dark' : 'light');
    };

    detectTheme();

    // React to storage changes (e.g., toggled in your hub)
    const onStorage = (e) => {
      if (['theme', 'color-mode', 'colorMode'].includes(e.key)) detectTheme();
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);
}
