
import { Link, useNavigate } from 'react-router-dom'
import { type UserName as UserNameType, type UserId as UserIdType } from '../types'
import { useState, useEffect } from 'react'

interface Props {
  userId: UserIdType
  userName: UserNameType
  setUserId: React.Dispatch<React.SetStateAction<UserIdType>>
  setUserName: React.Dispatch<React.SetStateAction<UserNameType>>
}

export const User: React.FC<Props> = ({ userId, userName, setUserId, setUserName }) => {
  const { id } = userId
  const { name } = userName
  const navigate = useNavigate()
  const getUserId = (): number => id

  const [isLogged, setIsLogged] = useState(() => getUserId() !== 0)

  useEffect(() => {
    setIsLogged(getUserId() !== 0)
  }, [userId])
  const handleLogout = (): void => {
    window.localStorage.removeItem('UserLogged')
    setIsLogged(false)
    setUserName({ name: '' })
    setUserId({ id: 0 })
    navigate('/', { state: { userId: 0 }, replace: true })
  }

  return (
    <>
    <div className='user'>
    {isLogged
      ? (<>
      <h3>{name}</h3>
      <button className='logout' onClick={handleLogout} >Logout</button>
      </>)
      : (<>
          <Link to='/login' >Login</Link>
          <h3>|</h3>
          <Link to='/register' >Register</Link>
          </>)
}
 </div>
    </>
  )
}
