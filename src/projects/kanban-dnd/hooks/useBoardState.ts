import { useEffect, useState } from 'react'
import type { Board } from '../types'
import { loadBoard, saveBoard } from '../lib/storage'
import { SEED_BOARD } from '../data/seed'

/** Owns and persists board state. Encapsulate I/O so components stay clean. */
export function useBoardState() {
  const [board, setBoard] = useState<Board>(() => loadBoard() ?? SEED_BOARD)

  useEffect(() => {
    saveBoard(board)
  }, [board])

  return { board, setBoard }
}
