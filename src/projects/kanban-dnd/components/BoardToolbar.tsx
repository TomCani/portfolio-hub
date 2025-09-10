type Props = {
  onReset: () => void
}

export default function BoardToolbar({ onReset }: Props) {
  return (
    <div className="d-flex align-items-center justify-content-between mb-3">
      <h1 className="h4 m-0">Kanban Mini-Board</h1>
      <div className="d-flex gap-2">
        <button className="btn btn-outline-secondary btn-sm" onClick={onReset} title="Reset to seed">
          Reset
        </button>
      </div>
    </div>
  )
}
