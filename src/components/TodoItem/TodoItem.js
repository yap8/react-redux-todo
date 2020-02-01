import React from 'react'
import { getFormattedDate, isValidDate } from '../../utils'

const TodoItem = ({ todo: { id, title, description, importance, dateAdded, dateExpires, dateCompleted, status, isHidden }, changeItemStatus, deleteItem, editItemTitle, addDateCompleted }) => {
  const handleToggleButtonClick = () => {
    if (status === 'completed') {
      addDateCompleted(id, null)
    } else {
      addDateCompleted(id, new Date())
    }
    changeItemStatus(id, status === 'active' ? 'completed' : status === 'completed' ? 'active' : 'completed')
  }
  
  return (
    <li style={{display: isHidden ? 'none' : 'block', color: status === 'active' ? 'black' : status === 'completed' ? 'green' : 'red'}}>
      <input type="text" value={title} onChange={(e) => editItemTitle(id, e.target.value)} />
      <div>Added: {getFormattedDate(dateAdded)}</div>
      {isValidDate(dateExpires) && <div>Expires: {getFormattedDate(dateExpires)}</div>}
      {dateCompleted && <div>Completed: {getFormattedDate(dateCompleted)}</div>}
      {description && <div>{description}</div>}
      {importance && <div>{importance}</div>}
      <strong>{status}</strong>
      <div>
        <button onClick={handleToggleButtonClick}>&#10004;</button>
        <button onClick={() => deleteItem(id)}>&times;</button>
      </div>
    </li>
  )
}

export default TodoItem
