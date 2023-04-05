import { useEffect, useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Todos } from './components/Todos'
import { TODO_FILTERS } from './const'
import { type TodoId, type Todo as TodoType, type FilterValue, type TodoTitle } from './types'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { getAllTask, createTask, deleteTask, completeTask, editTask } from './services/Tasks/TaskServices'

// const mockTodos = [
//   {
//     id: '1',
//     title: 'todo 1',
//     completed: true
//   },
//   {
//     id: '2',
//     title: 'todo 2',
//     completed: false
//   },
//   {
//     id: '3',
//     title: 'todo 3',
//     completed: false
//   }
// ]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState<TodoType[]>([])
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    getAllTask().then(listOfTodos => {
      setTodos(listOfTodos)
    })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const handleRemove = ({ id }: TodoId): void => {
    deleteTask({ id })
      .then(() => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const handleCompleted = (
    { id, completed }: Pick<TodoType, 'id' | 'completed'>
  ): void => {
    completeTask({ id, completed })
      .then(() => {
        const newTodos = todos.map(todo => {
          return (todo.id === id
            ? { ...todo, completed }
            : todo
          )
        })
        setTodos(newTodos)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = (): void => {
    const completedTasks = todos.filter(todo => todo.completed)
    Promise.all(completedTasks.map(async ({ id }) => { await deleteTask({ id }) }))
      .then(() => {
        const newTodos = todos.filter(todo => !todo.completed)
        setTodos(newTodos)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.filter(todo => todo.completed).length

  const filteredToDos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddToDo = ({ title }: TodoTitle): void => {
    createTask({ title })
      .then(res => {
        const newToDos = todos.concat(res)
        setTodos(newToDos)
      })
      .catch(error => {
        console.error(error)
      })
  }
  const handleEditTodo = ({ id }: TodoId, { title }: TodoTitle): void => {
    editTask({ id, title })
      .then(() => {
        const newTodos = todos.map(todo => {
          return (todo.id === id
            ? { ...todo, title }
            : todo
          )
        })
        setTodos(newTodos)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const handleLogin = (): void => {

  }
  const handleRegister = (): void => {

  }
  return (
    <>
      <div className='user'>
        <Login handleLogin={handleLogin} href='/login'></Login>
        <h3>|</h3>
        <Register handleRegister={handleRegister} href='/Register'></Register>
      </div>
    <div className='todoapp'>
      <Header newToDo={handleAddToDo}/>
      {loading
        ? (
        <div>Loading...</div>
          )
        : (
        <Todos
      onRemoveTodo={handleRemove}
      todos={filteredToDos}
      onToggleCompleteTodo = {handleCompleted}
      onEditTodo={handleEditTodo}
      />
          )
      }
      <Footer
      activeCount={activeCount}
      completedCount= {completedCount}
      filterSelected={filterSelected}
      handleFilterChange = {handleFilterChange}
      onClearCompleted = {handleRemoveAllCompleted}
      />
    </div>
    </>
  )
}

export default App
