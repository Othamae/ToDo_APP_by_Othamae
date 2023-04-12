import { useState } from 'react'
import { RegisterUser } from '../services/Users/UserServices'
import { useNavigate } from 'react-router-dom'
import Notification from '../components/Notification'
import { type Notification as NotificationType } from '../types'

export const Register: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState<NotificationType | null>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    RegisterUser({ email }, { password }, { name })
      .then(user => {
        console.log(user)
        const { id } = user
        setName('')
        setEmail('')
        setPassword('')
        navigate('/', { state: { userId: id } })
      })
      .catch(error => {
        console.error(error)
        setEmail('')
        setPassword('')
        setErrorMessage('USER ALREADY CREATED')
        setTimeout(() => {
          setErrorMessage('')
        }, 5000)
      })
  }

  return (
    <form onSubmit={handleSubmit}className='todoapp' >
      <div className='login'>
      <div>
        <label className='name' htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => { setName(e.target.value) }}
        />
      </div>
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
      <button type="submit">Register</button>
      </div>

    </form>
  )
}
