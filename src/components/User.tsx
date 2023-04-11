
import { Link } from 'react-router-dom'
import { type UserId as UserIdType } from '../types'

interface Props {
  userId: UserIdType
}

export const User: React.FC<Props> = ({ userId }) => {
  const { id } = userId

  const isLogged = id !== 0

  return (
    <>
    <div className='user'>
    {isLogged
      ? (<Link to='/logout' >Logout</Link>)
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
