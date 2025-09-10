export type Card = {
  id: string
  title: string
  notes?: string
}

export type Column = {
  id: string
  title: string
  cardIds: string[]
}

export type Board = {
  columns: Column[]
  cards: Record<string, Card>
}

export type DragType = 'column' | 'card'
