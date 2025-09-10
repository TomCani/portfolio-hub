import BoardToolbar from './components/BoardToolbar'
import KanbanPage from './pages/KanbanPage'
import { useBoardState } from './hooks/useBoardState'
import { SEED_BOARD } from './data/seed'

export default function App() {
  const { board, setBoard } = useBoardState()

  const reset = () => setBoard(SEED_BOARD)

  return (
    <div className="container py-3">
      <BoardToolbar onReset={reset} />
      <KanbanPage board={board} setBoard={setBoard} />
    </div>
  )
}
