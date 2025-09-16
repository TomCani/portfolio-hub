import { useEffect, useState } from 'react';

/**
 * Syncs this project with the hub's theme by reading <html data-bs-theme="...">.
 * Works with your existing App.tsx: <div className="pricing-theme" data-theme={theme}>
 */
export function useTheme() {
  const read = () =>
    (document.documentElement.getAttribute('data-bs-theme') as 'light' | 'dark') || 'light';

  const [theme, setTheme] = useState<'light' | 'dark'>(read());

  useEffect(() => {
    const mo = new MutationObserver(() => setTheme(read()));
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-bs-theme'] });
    return () => mo.disconnect();
  }, []);

  return { theme };
}
