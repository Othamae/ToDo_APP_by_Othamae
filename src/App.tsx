import { Login } from './pages/Login'
import { ToDos } from './pages/ToDos'
import { Register } from './pages/Register'
import { User } from './components/User'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { type UserName as UserNameType, type UserId as UserIdType } from './types'

const App = (): JSX.Element => {
  const [userId, setUserId] = useState < UserIdType >({ id: 0 })
  const [userName, setUserName] = useState< UserNameType >({ name: '' })

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('UserLogged')
    if (loggedUserJSON != null) {
      const user = JSON.parse(loggedUserJSON)
      const { name, id } = user
      setUserId({ id })
      setUserName({ name })
    }
  }, [])

  return (
    <>
      <div className='user'>
        <User userId = {userId} userName={userName} setUserId={setUserId} setUserName={setUserName}></User>
      </div>

    <Routes>
      <Route path='/ToDo_APP_by_Othamae/' element={<ToDos userId = {userId}/>}/>
    <Route path='/ToDo_APP_by_Othamae/login' element={<Login setUserId={setUserId} setUserName = {setUserName}/>} />
    <Route path='/ToDo_APP_by_Othamae/register' element={<Register />} />
    </Routes>
    <h5>by @othamae</h5>
    </>
  )
}

export default App
