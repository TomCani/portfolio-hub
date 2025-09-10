import React, { useMemo } from 'react'

import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  closestCenter,
} from '@dnd-kit/core'

import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core'

import {
  SortableContext,
  horizontalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable'

import type { Board, Column } from '../types'
import ColumnComp from '../components/Column'
import AddCard from '../components/AddCard'
import { uid } from '../lib/uid'

type Props = {
  board: Board
  setBoard: React.Dispatch<React.SetStateAction<Board>>
}

export default function KanbanPage({ board, setBoard }: Props) {
  const sensors = useSensors(
  useSensor(PointerSensor, {
    activationConstraint: { distance: 5 },
  }),
)

  const columnIds = useMemo(() => board.columns.map(c => c.id), [board.columns])

  const onDragStart = (_e: DragStartEvent) => {
    // optional UI state
  }

  const onDragEnd = (e: DragEndEvent) => {
    const { active, over } = e
    if (!over) return

    const activeType = active.data.current?.type
    const overId = String(over.id)

    // Column reordering
    if (activeType === 'column') {
      const oldIdx = board.columns.findIndex(c => c.id === String(active.id))
      const newIdx = board.columns.findIndex(c => c.id === overId)
      if (oldIdx === -1 || newIdx === -1 || oldIdx === newIdx) return

      const newCols = arrayMove(board.columns, oldIdx, newIdx)
      setBoard(b => ({ ...b, columns: newCols }))
      return
    }

    // Card moving (within/between columns)
    if (activeType === 'card') {
      const activeId = String(active.id)

      // find source column
      const sourceCol = board.columns.find(col => col.cardIds.includes(activeId))
      if (!sourceCol) return

      // find destination column (over can be a card id or a column id)
      let destCol: Column | undefined =
        board.columns.find(col => col.cardIds.includes(overId)) ??
        board.columns.find(col => col.id === overId)
      if (!destCol) return

      if (sourceCol.id === destCol.id) {
        // reorder within same column
        const oldIndex = sourceCol.cardIds.indexOf(activeId)
        const newIndex = destCol.cardIds.indexOf(overId)
        if (oldIndex === -1 || newIndex === -1 || oldIndex === newIndex) return

        const newCardIds = arrayMove(sourceCol.cardIds, oldIndex, newIndex)
        const newCols = board.columns.map(col =>
          col.id === sourceCol.id ? { ...col, cardIds: newCardIds } : col
        )
        setBoard(b => ({ ...b, columns: newCols }))
      } else {
        // move across columns
        const sourceIdx = sourceCol.cardIds.indexOf(activeId)
        if (sourceIdx === -1) return

        const newSourceIds = [...sourceCol.cardIds]
        newSourceIds.splice(sourceIdx, 1)

        const destIndex = destCol.cardIds.indexOf(overId)
        const insertAt = destIndex >= 0 ? destIndex : destCol.cardIds.length
        const newDestIds = [...destCol.cardIds]
        newDestIds.splice(insertAt, 0, activeId)

        const newCols = board.columns.map(col => {
          if (col.id === sourceCol.id) return { ...col, cardIds: newSourceIds }
          if (col.id === destCol!.id)   return { ...col, cardIds: newDestIds }
          return col
        })

        setBoard(b => ({ ...b, columns: newCols }))
      }
    }
  }

  const addCard = (colId: string, title: string) => {
    const id = uid('c')
    setBoard(b => {
      const cards = { ...b.cards, [id]: { id, title } }
      const columns = b.columns.map(col =>
        col.id === colId ? { ...col, cardIds: [...col.cardIds, id] } : col
      )
      return { ...b, cards, columns }
    })
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <SortableContext items={columnIds} strategy={horizontalListSortingStrategy}>
        <div className="kanban-wrap">
          {board.columns.map((col) => (
            <div key={col.id} id={col.id}>
              <ColumnComp
                column={col}
                cardsById={board.cards}
                onAddCard={addCard}
                AddCardSlot={AddCard}
              />
            </div>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  )
}
