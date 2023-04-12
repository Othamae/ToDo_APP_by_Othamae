import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginUser } from '../services/Users/UserServices'
import { type UserId as UserIdType, type Notification as NotificationType, type UserName as UserNameType } from '../types'
import Notification from '../components/Notification'

interface Props {
  setUserId: React.Dispatch<React.SetStateAction<UserIdType>>
  setUserName: React.Dispatch<React.SetStateAction<UserNameType>>
}

export const Login: React.FC<Props> = ({ setUserId, setUserName }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState<NotificationType | null>('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    LoginUser({ email }, { password })
      .then(user => {
        const { id, name } = user
        setUserName({ name })
        setUserId({ id })
        setEmail('')
        setPassword('')
        navigate('/ToDo_APP_by_Othamae', { state: { userId: id } })
      })
      .catch(error => {
        console.error(error)
        setEmail('')
        setPassword('')
        setErrorMessage('WRONG CREDENTIALS')
        setTimeout(() => {
          setErrorMessage('')
        }, 5000)
      })
  }

  return (
    <form onSubmit={handleSubmit}className='todoapp' >
      <div className='login'>
      <div>
        <label className='email' htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => { setPassword(e.target.value) }}
        />
        {
          errorMessage !== ''
            ? <Notification message={errorMessage}/>
            : null
        }

      </div>
      <button type="submit">Login</button>
      </div>

    </form>
  )
}
