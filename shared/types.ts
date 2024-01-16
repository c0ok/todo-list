export type Todo = {
  id: string
  name: string
  completed: boolean
}

export type Action = (todo: Todo) => void
export type AddTodoAction = (name: string) => void

export type Todos = {
  [key in string]: Todo | null
}