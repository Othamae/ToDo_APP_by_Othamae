export const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const

export const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    literal: 'ToDos',
    href: `/?filters=${TODO_FILTERS.ALL}`
  },
  [TODO_FILTERS.ACTIVE]: {
    literal: 'Active',
    href: `/?filters=${TODO_FILTERS.ACTIVE}`
  },
  [TODO_FILTERS.COMPLETED]: {
    literal: 'Completed',
    href: `/?filters=${TODO_FILTERS.COMPLETED}`
  }
} as const

const API_URL = 'https://todo-apibackend-production.up.railway.app'

export const URL_TASK = `${API_URL}/api/task`
export const URL_USER = `${API_URL}/api/user`
