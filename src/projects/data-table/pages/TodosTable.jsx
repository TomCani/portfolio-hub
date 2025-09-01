import { useEffect, useMemo, useState } from 'react';
import { fetchJSON } from '../lib/fetcher.js';
import DataTable from '../components/DataTable.jsx';

export default function TodosTable() {
  const [rows, setRows] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    const ac = new AbortController();
    setStatus('loading');
    fetchJSON('https://jsonplaceholder.typicode.com/todos', { signal: ac.signal })
      .then((data) => {
        setRows(Array.isArray(data) ? data : []);
        setStatus('success');
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err);
          setStatus('error');
        }
      });
    return () => ac.abort();
  }, []);

  const columns = useMemo(
    () => [
      { key: 'id', header: 'ID' },
      { key: 'title', header: 'Title' },
      {
        key: 'completed',
        header: 'Done',
        render: (v) => (v ? 'Yes' : 'No'),
        sortFn: (a, b) => (a === b ? 0 : a ? 1 : -1),
      },
      { key: 'userId', header: 'User ID' },
    ],
    []
  );

  const filterFn = (row, q) => {
    const needle = String(q).toLowerCase();
    return (
      String(row.id).includes(needle) ||
      String(row.userId).includes(needle) ||
      String(row.title).toLowerCase().includes(needle) ||
      (needle === 'yes' && row.completed) ||
      (needle === 'no' && !row.completed)
    );
  };

  if (status === 'loading') return <div className="container py-4">Loading todos…</div>;
  if (status === 'error')
    return (
      <div className="container py-4 text-danger">
        Failed to load todos: {String(error?.message || 'Unknown error')}
      </div>
    );

  return (
    <div className="container py-2">
      <div className="d-flex align-items-center gap-2 mb-3">
        <h2 className="h4 mb-0">Todos</h2>
        <input
          className="form-control ms-auto"
          style={{ maxWidth: 320 }}
          placeholder="Filter todos… (try: yes / no)"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>

      <DataTable
        columns={columns}
        rows={rows}
        filterText={filterText}
        filterFn={filterFn}
        initialSort={[{ key: 'id', dir: 'asc' }]}   // array, not object
        pageSize={10}
      />
    </div>
  );
}
