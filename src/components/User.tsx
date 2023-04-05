
import { Link } from 'react-router-dom'

export const User: React.FC = () => {
  const isLogged = false

  return (
    <>
    <div className='user'>
    {isLogged
      ? (<Link to='/logout' >Logout</Link>)
      : (<Link to='/login' >Login</Link>)
    }
    <h3>|</h3>
    <Link to='/register' >Register</Link>

 </div>
    </>
  )
}
