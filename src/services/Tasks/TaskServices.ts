import axios from 'axios'
import { type Todo as TodoType, type TodoTitle, type TodoId } from '../../types'

const URL = 'http://localhost:5001/api/task'

export const getAllTask = async (): Promise<TodoType[]> => {
  try {
    const response = await axios.get<TodoType[]>(URL)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const createTask = async ({ title }: TodoTitle): Promise<TodoType[]> => {
  const newToDo = {
    title,
    completed: false,
    user_id: 1
  }

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
