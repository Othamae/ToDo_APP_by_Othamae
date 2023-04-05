import { type TodoId, type ListOfTodos, type Todo as TodoType, type TodoTitle } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  onEditTodo: ({ id }: TodoId, { title }: TodoTitle) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleteTodo, onEditTodo }) => {
  const sortedTodos = todos.sort((a, b) => a.id - b.id)
  return (
        <ul className='todo-list'>
            {sortedTodos.map(todo => (
                <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
                    <Todo
                    key={todo.id}
                    id= {todo.id}
                    title= {todo.title}
                    completed= {todo.completed}
                    user_id={todo.user_id}
                    onToggleCompleteTodo = {onToggleCompleteTodo}
                    onRemoveTodo={onRemoveTodo}
                    onEditTodo={onEditTodo}
                    />
                </li>
            ))}
        </ul>
  )
}
