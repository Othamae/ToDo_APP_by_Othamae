import { type TodoTitle } from '../types'
import { CreateToDo } from './CreateToDo'

interface Props {
  newToDo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ newToDo }) => {
  return (
    <header className="header">
        <h1>ToDo List</h1>
        <CreateToDo saveToDo={newToDo} />
    </header>

  )
}
