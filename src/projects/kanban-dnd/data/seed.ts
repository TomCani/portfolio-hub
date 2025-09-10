import type { Board } from '../types'

export const SEED_BOARD: Board = {
  columns: [
    { id: 'col_todo',    title: 'To Do',        cardIds: ['c1','c2'] },
    { id: 'col_doing',   title: 'In Progress',  cardIds: ['c3'] },
    { id: 'col_done',    title: 'Done',         cardIds: ['c4'] },
  ],
  cards: {
    c1: { id: 'c1', title: 'Wire up dnd-kit', notes: 'DndContext + SortableContext' },
    c2: { id: 'c2', title: 'Persist in localStorage' },
    c3: { id: 'c3', title: 'Bootstrap polish' },
    c4: { id: 'c4', title: 'Dark theme compatibility' },
  },
}
