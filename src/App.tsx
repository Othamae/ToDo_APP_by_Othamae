import { Login } from './pages/Login'
import { ToDos } from './pages/ToDos'
import { Register } from './pages/Register'
import { User } from './components/User'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { type UserId } from './types'

const App = (): JSX.Element => {
  const [userId, setUserId] = useState < UserId >({ id: 0 })
  console.log({ userId })
  return (
    <>
      <div className='user'>
        <User userId = {userId}></User>
      </div>

    <Routes>
      <Route path='/' element={<ToDos userId = {userId}/>}/>
    <Route path='/login' element={<Login setUserId={setUserId}/>} />
    <Route path='/register' element={<Register />} />
    </Routes>
    </>
  )
}

export default App
