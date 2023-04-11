import axios from 'axios'
import { type Todo as TodoType, type TodoTitle, type TodoId, type UserId as UserIdType } from '../../types'

const URL = 'http://localhost:5001/api/task'
const URL_USER = 'http://localhost:5001/api/user'

export const getAllTask = async (): Promise<TodoType[]> => {
  try {
    const response = await axios.get<TodoType[]>(URL)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const createTask = async ({ title }: TodoTitle, { id }: UserIdType): Promise<TodoType[]> => {
  console.log({ id })
  const newToDo = {
    title,
    completed: false,
    user_id: id
  }
  console.log({ newToDo })

  try {
    const response = await axios.post<TodoType[]>(URL, newToDo)
    console.log({ response })
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const deleteTask = async ({ id }: TodoId): Promise<void> => {
  try {
    await axios.delete(`${URL}/${id.toString()}`)
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const completeTask = async (
  { id, completed }: Pick<TodoType, 'id' | 'completed'>): Promise<void> => {
  try {
    await axios.put(`${URL}/${id.toString()}`, { completed })
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const editTask = async (
  { id, title }: Pick<TodoType, 'id' | 'title'>): Promise<void> => {
  try {
    await axios.put(`${URL}/${id.toString()}`, { title })
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const UserListOfTask = async (userid: UserIdType): Promise<TodoType[]> => {
  try {
    const { id } = userid
    if (id === null) return []
    const response = await axios.get<TodoType[]>(`${URL_USER}/${id.toString()}/task`)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
