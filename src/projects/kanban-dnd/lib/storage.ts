import type { Board } from '../types'

const KEY = 'kanban:v1'

export const loadBoard = (): Board | null => {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as Board) : null
  } catch {
    return null
  }
}

export const saveBoard = (board: Board) => {
  localStorage.setItem(KEY, JSON.stringify(board))
}
