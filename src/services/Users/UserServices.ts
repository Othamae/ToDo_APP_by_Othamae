import axios from 'axios'
import { type UserPassword, type UserEmail, type User as UserType, type UserName } from '../../types'
import { URL_USER } from '../../const'

export const LoginUser = async ({ email }: UserEmail, { password }: UserPassword): Promise<UserType> => {
  try {
    const response = await axios.post(`${URL_USER}/login`, { email, password })
    console.log({ response })
    const user = response.data
    window.localStorage.setItem('UserLogged', JSON.stringify(user))
    return user
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const RegisterUser = async ({ email }: UserEmail, { password }: UserPassword, { name }: UserName): Promise<UserType> => {
  try {
    const response = await axios.post(`${URL_USER}/register`, { email, password, name })
    console.log({ response })
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
