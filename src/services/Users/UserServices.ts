import axios from 'axios'
import { type UserPassword, type UserEmail, type User as UserType } from '../../types'

const URL = 'http://localhost:5001/api/user'

export const LoginUser = async ({ email }: UserEmail, { password }: UserPassword): Promise<UserType> => {
  try {
    const response = await axios.post(`${URL}/login`, { email, password })
    console.log({ response })
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
