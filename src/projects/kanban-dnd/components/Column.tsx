import React from 'react'
import { useSortable, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import CardItem from './CardItem'
import type { Card, Column } from '../types'

type Props = {
  column: Column
  cardsById: Record<string, Card>
  onAddCard: (colId: string, title: string) => void
  AddCardSlot: React.FC<{ onAdd: (title: string) => void }>
}

export default function Column({ column, cardsById, onAddCard, AddCardSlot }: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: { type: 'column' },
  })

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`kanban-col column-draggable ${isDragging ? 'dragging' : ''}`}
      {...attributes}
      {...listeners}
    >
      <div className="kanban-col-header d-flex justify-content-between align-items-center">
        <span>{column.title}</span>
        <span className="badge text-bg-secondary">{column.cardIds.length}</span>
      </div>
      <div className="kanban-col-body">
        <SortableContext
          items={column.cardIds}
          strategy={verticalListSortingStrategy}
        >
          {column.cardIds.map((cid) => (
            <CardItem key={cid} card={cardsById[cid]} />
          ))}
        </SortableContext>

        <AddCardSlot onAdd={(title) => onAddCard(column.id, title)} />
      </div>
    </div>
  )
}
