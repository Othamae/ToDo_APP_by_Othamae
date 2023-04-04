import { type TODO_FILTERS } from './const'
export interface Todo {
  id: number
  title: string
  completed: boolean
  user_id: number
}

export type TodoTitle = Pick<Todo, 'title'>
export type TodoId = Pick<Todo, 'id'>
export type TodoCompleted = Pick<Todo, 'completed'>
export type TodoUser_id = Pick<Todo, 'user_id'>

export type ListOfTodos = Todo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
