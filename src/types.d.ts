import { type TODO_FILTERS } from './const'
export interface Todo {
  id: number
  title: string
  completed: boolean
  userId: number
}

export type TodoTitle = Pick<Todo, 'title'>
export type TodoId = Pick<Todo, 'id'>
export type TodoCompleted = Pick<Todo, 'completed'>
export type TodoUser_id = Pick<Todo, 'userId'>

export type ListOfTodos = Todo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

export interface User {
  id: number
  email: string
  password: string
  name: string
}

export type UserEmail = Pick<User, 'email'>
export type UserPassword = Pick<User, 'password'>
export type UserId = Pick<User, 'id'>
export type UserName = Pick<User, 'name'>

export type Notification = string
