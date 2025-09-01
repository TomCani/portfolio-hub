import { useEffect, useMemo, useState } from 'react';
import { fetchJSON } from '../lib/fetcher.js';
import DataTable from '../components/DataTable.jsx';

const access = (obj, path) =>
  String(path).split('.').reduce((v, k) => (v == null ? v : v[k]), obj);

export default function UsersTable() {
  const [rows, setRows] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    const ac = new AbortController();
    setStatus('loading');
    fetchJSON('https://jsonplaceholder.typicode.com/users', { signal: ac.signal })
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

  // NOTE: use 'header' (not 'label'); nested keys are fine
  const columns = useMemo(
    () => [
      { key: 'name', header: 'Name' },
      { key: 'username', header: 'Username' },
      { key: 'email', header: 'Email' },
      { key: 'company.name', header: 'Company' },
    ],
    []
  );

  // Optional: explicit filter function (defaults to visible columns if omitted)
  const filterFn = (row, q) => {
    const needle = String(q).toLowerCase();
    return ['name', 'username', 'email', 'company.name'].some((k) => {
      const v = access(row, k);
      return v != null && String(v).toLowerCase().includes(needle);
    });
  };

  if (status === 'loading') return <div className="container py-4">Loading users…</div>;
  if (status === 'error')
    return (
      <div className="container py-4 text-danger">
        Failed to load users: {String(error?.message || 'Unknown error')}
      </div>
    );

  return (
    <div className="container py-2">
      <div className="d-flex align-items-center gap-2 mb-3">
        <h2 className="h4 mb-0">Users</h2>
        <input
          className="form-control ms-auto"
          style={{ maxWidth: 320 }}
          placeholder="Filter users…"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>

      <DataTable
        columns={columns}
        rows={rows}
        filterText={filterText}
        filterFn={filterFn}
        initialSort={[{ key: 'name', dir: 'asc' }]}  // array, not object
        pageSize={10}
      />
    </div>
  );
}
