import React from 'react'

import { capitalize } from '../../utils'

const TodoAddInput = ({ name, value, updateFormValue }) => {
  const handleChange = ({ target: { name, value} }) => {
    updateFormValue(name, value)
  }

  switch (name) {
    case 'importance':
      return (
        <select 
          name={name}
          onChange={handleChange}
        >
          <option value="important">important</option>
          <option value="regular">regular</option>
          <option value="not important">not important</option>
        </select>
      )
    default:
      return (   
        <input 
          type={name === 'dateExpires' ? 'datetime-local' : 'text'}
          placeholder={capitalize(name)}
          name={name}
          value={value}
          onChange={handleChange}
        />
    )
  }
}

export default TodoAddInput