export default function Pagination({ page, pageCount, onPage }) {
  const go = (n) => onPage(Math.min(Math.max(1, n), Math.max(1, pageCount)));

  // windowed page buttons: 1 … around current … last
  const window = 2;
  const nums = [];
  const start = Math.max(1, page - window);
  const end = Math.min(pageCount, page + window);

  if (start > 1) nums.push(1);
  if (start > 2) nums.push('…');
  for (let n = start; n <= end; n++) nums.push(n);
  if (end < pageCount - 1) nums.push('…');
  if (end < pageCount) nums.push(pageCount);

  return (
    <nav aria-label="Pagination">
      <ul className="pagination pagination-sm mb-0">
        <li className={`page-item ${page <= 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => go(page - 1)}>Prev</button>
        </li>

        {nums.map((n, i) =>
          n === '…' ? (
            <li className="page-item disabled" key={`ellipsis-${i}`}>
              <span className="page-link">…</span>
            </li>
          ) : (
            <li className={`page-item ${n === page ? 'active' : ''}`} key={n}>
              <button className="page-link" onClick={() => go(n)}>{n}</button>
            </li>
          )
        )}

        <li className={`page-item ${page >= pageCount ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => go(page + 1)}>Next</button>
        </li>
      </ul>
    </nav>
  );
}
