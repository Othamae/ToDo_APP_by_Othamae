import { type TodoTitle, type UserId as UserIdType } from '../types'
import { CreateToDo } from './CreateToDo'

interface Props {
  newToDo: ({ title }: TodoTitle, { id }: UserIdType) => void
  userId: UserIdType
}

export const Header: React.FC<Props> = ({ newToDo, userId }) => {
  return (
    <header className="header">
        <h1>ToDo List</h1>
        <CreateToDo saveToDo={newToDo} userId = {userId}/>
    </header>

  )
}
