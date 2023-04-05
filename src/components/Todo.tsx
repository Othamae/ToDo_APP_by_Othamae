import { type TodoTitle, type TodoId, type Todo as TodoType } from '../types'
import { useState } from 'react'

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  onEditTodo: ({ id }: TodoId, { title }: TodoTitle) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleteTodo, onEditTodo }) => {
  const [editing, setEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(title)
  const handleDoubleClick = (): void => {
    setEditing(true)
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTitle(event.target.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      onEditTodo({ id }, { title: newTitle })
      setEditing(false)
    }
  }
  return (
        <div className="view">
            <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={(event) => {
              onToggleCompleteTodo({ id, completed: event.target.checked })
            }}
            />{
              editing
                ? (
                  <input
                  type="text"
                  className="new-todo"
                  value={newTitle}
                  onChange = {handleChange}
                  autoFocus
                  onKeyDown={handleKeyDown}
                  onBlur={() => {
                    setEditing(false)
                  }}
                />
                  )
                : (
                <label onDoubleClick={handleDoubleClick}>{newTitle}</label>
                  )
            }
            <button
            className='destroy'
            onClick = {() => {
              onRemoveTodo({ id })
            }}
            />
        </div>
  )
}
