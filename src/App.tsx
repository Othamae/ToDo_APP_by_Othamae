import { Login } from './pages/Login'
import { ToDos } from './pages/ToDos'
import { Register } from './pages/Register'
import { User } from './components/User'
import { Routes, Route } from 'react-router-dom'

const App = (): JSX.Element => {
  return (
    <>
      <div className='user'>
        <User ></User>
      </div>

    <Routes>
      <Route path='/' element={<ToDos/>}/>
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    </Routes>
    </>
  )
}

export default App
