import { useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Todos } from './components/Todos'
import { TODO_FILTERS } from './const'
import { type TodoId, type Todo as TodoType, type FilterValue, type TodoTitle } from './types'

const mockTodos = [
  {
    id: '1',
    title: 'todo 1',
    completed: true
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = (
    { id, completed }: Pick<TodoType, 'id' | 'completed'>
  ): void => {
    const newTodos = todos.map(todo => {
      return (todo.id === id
        ? { ...todo, completed }
        : todo
      )
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.filter(todo => todo.completed).length

  const filteredToDos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddToDo = ({ title }: TodoTitle): void => {
    const newToDo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }
    const newTodos = [...todos, newToDo]
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Header newToDo={handleAddToDo}/>
      <Todos
      onRemoveTodo={handleRemove}
      todos={filteredToDos}
      onToggleCompleteTodo = {handleCompleted}
      />
      <Footer
      activeCount={activeCount}
      completedCount= {completedCount}
      filterSelected={filterSelected}
      handleFilterChange = {handleFilterChange}
      onClearCompleted = {handleRemoveAllCompleted}
      />
    </div>

  )
}

export default App
