import { useState } from 'react'

type Props = {
  onAdd: (title: string) => void
}

export default function AddCard({ onAdd }: Props) {
  const [title, setTitle] = useState('')

  const add = () => {
    if (!title.trim()) return
    onAdd(title.trim())
    setTitle('')
  }

  return (
    <div className="input-group mt-2">
      <input
        className="form-control form-control-sm"
        placeholder="Add a card..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && add()}
      />
      <button className="btn btn-primary btn-sm" onClick={add}>Add</button>
    </div>
  )
}
