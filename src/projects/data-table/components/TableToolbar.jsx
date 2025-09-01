import { useEffect, useState } from "react";

export default function TableToolbar({ filterText, onFilterChange, pageSize, onPageSizeChange }) {
  const [local, setLocal] = useState(filterText || "");

  // Debounce to keep UI snappy on big lists
  useEffect(() => {
    const t = setTimeout(() => onFilterChange(local), 250);
    return () => clearTimeout(t);
  }, [local, onFilterChange]);

  return (
    <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
      <input
        className="form-control"
        placeholder="Search…"
        value={local}
        onChange={(e) => setLocal(e.target.value)}
        style={{ maxWidth: 280 }}
        aria-label="Filter rows"
      />
      <div className="ms-auto d-flex align-items-center gap-2">
        <label className="form-label m-0 small">Rows per page</label>
        <select
          className="form-select form-select-sm"
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          style={{ width: 100 }}
          aria-label="Rows per page"
        >
          {[5, 10, 20, 50].map(n => <option key={n} value={n}>{n}</option>)}
        </select>
      </div>
    </div>
  );
}
