import { useState } from 'react'
import { type TodoTitle, type UserId as UserIdType } from '../types'

interface Props {
  saveToDo: ({ title }: TodoTitle, { id }: UserIdType) => void
  userId: UserIdType
}

export const CreateToDo: React.FC<Props> = ({ saveToDo }, { id }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    saveToDo({ title: inputValue }, { id })
    setInputValue(' ')
  }
  return (
        <form onSubmit={handleSubmit}>
            <input
                className='new-todo'
                value={inputValue}
                onChange = {(e) => { setInputValue(e.target.value) }}
                placeholder='Add new Task'
                autoFocus>
            </input>
        </form>

  )
}
