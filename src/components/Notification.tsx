import React from 'react'
import { type Notification as NotificationType } from '../types'

interface Props {
  message: NotificationType | null

}
const Notification: React.FC<Props> = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="error">
      { message }
    </div>
  )
}

export default Notification
