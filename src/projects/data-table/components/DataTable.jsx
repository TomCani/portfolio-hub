import { useEffect, useMemo, useState } from "react";
import Pagination from "./Pagination.jsx"; // or "./Pagination" if you name file .js

/**
 * DataTable
 * props:
 * - columns: [{key, header, render?, sortable?:true, sortFn?}]
 * - rows: array of objects
 * - filterText: string
 * - filterFn: (row, filterText) => boolean
 * - initialSort?: [{key, dir:'asc'|'desc'}]
 * - pageSize: number
 */
export default function DataTable({
  columns,
  rows,
  filterText,
  filterFn,
  initialSort = [],
  pageSize = 10,
}) {
  // Crash-proof inputs
  const cols = Array.isArray(columns) ? columns : [];
  const data = Array.isArray(rows) ? rows : [];

  // dot-path accessor: "company.name" -> row.company.name
  const get = (obj, path) =>
    String(path ?? "").split(".").reduce((v, k) => (v == null ? v : v[k]), obj);

  const [sort, setSort] = useState(initialSort);
  const [page, setPage] = useState(1);

  function toggleSort(key) {
    setPage(1);
    setSort((prev) => {
      const found = prev.find((s) => s.key === key);
      if (!found) return [{ key, dir: "asc" }];               // start asc
      if (found.dir === "asc") return [{ key, dir: "desc" }]; // flip desc
      return [];                                              // third click: off
    });
  }

  // Filtering (caller supplies filterFn; fallback to visible cols)
  const defaultFilterFn = (row, q) => {
    if (!q) return true;
    const needle = String(q).toLowerCase();
    return cols.some((c) => {
      const v = get(row, c.key);
      return v != null && String(v).toLowerCase().includes(needle);
    });
  };
  const effFilterFn = typeof filterFn === "function" ? filterFn : defaultFilterFn;

  const filtered = useMemo(() => {
    if (!filterText) return data;
    return data.filter((r) => effFilterFn(r, filterText));
  }, [data, filterText, effFilterFn]);

  // Sorting (single key; supports custom sortFn; uses nested accessor)
  const sorted = useMemo(() => {
    if (!sort.length) return filtered;
    const [{ key, dir }] = sort;
    const col = cols.find((c) => c.key === key);
    const sfn = col?.sortFn || defaultSort(get, key);
    return [...filtered].sort((a, b) => sfn(a, b, dir));
  }, [filtered, sort, cols]);

  // Pagination
  const pageCount = Math.max(1, Math.ceil(sorted.length / pageSize));
  const start = (page - 1) * pageSize;
  const visible = sorted.slice(start, start + pageSize);

  // Reset/clamp page when data/filters change
  useEffect(() => { setPage(1); }, [filterText, data, pageSize]);
  useEffect(() => {
    if (page > pageCount) setPage(pageCount);
  }, [page, pageCount]);

  return (
    <div className="table-responsive">
      <table className="table align-middle">
        <thead>
          <tr>
            {cols.map((col) => (
              <th
                key={col.key}
                scope="col"
                onClick={col.sortable === false ? undefined : () => toggleSort(col.key)}
                aria-sort={ariaSort(sort, col.key)}
                role={col.sortable === false ? undefined : "button"}
                className={col.sortable === false ? "" : "user-select-none"}
                title={col.sortable === false ? undefined : "Sort"}
              >
                <div className="d-flex align-items-center gap-2">
                  <span>{col.header}</span>
                  {col.sortable === false ? null : (
                    <SortIcon activeKey={sort[0]?.key} dir={sort[0]?.dir} colKey={col.key} />
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {visible.length === 0 ? (
            <tr>
              <td colSpan={cols.length} className="text-center py-5">No results</td>
            </tr>
          ) : (
            visible.map((row, i) => (
              <tr key={row.id ?? i}>
                {cols.map((col) => {
                  const val = get(row, col.key);
                  return (
                    <td key={col.key}>
                      {typeof col.render === "function" ? col.render(val, row) : String(val ?? "")}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="d-flex justify-content-between align-items-center">
        <div className="small text-muted">
          Showing {visible.length ? start + 1 : 0}–{start + visible.length} of {sorted.length}
        </div>
        <Pagination page={page} pageCount={pageCount} onPage={setPage} />
      </div>
    </div>
  );
}

function defaultSort(get, key) {
  return (a, b, dir) => {
    const av = get(a, key);
    const bv = get(b, key);
    const an = typeof av === "number";
    const bn = typeof bv === "number";
    let cmp = 0;
    if (an && bn) cmp = av - bv;
    else cmp = String(av ?? "").localeCompare(String(bv ?? ""), undefined, { sensitivity: "base" });
    return dir === "asc" ? cmp : -cmp;
  };
}

function ariaSort(sort, key) {
  if (!sort.length || sort[0].key !== key) return "none";
  return sort[0].dir === "asc" ? "ascending" : "descending";
}

function SortIcon({ activeKey, dir, colKey }) {
  if (activeKey !== colKey) return <span className="small text-muted">↕</span>;
  return dir === "asc" ? <span className="small">↑</span> : <span className="small">↓</span>;
}
