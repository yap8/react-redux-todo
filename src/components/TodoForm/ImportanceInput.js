import React from 'react'

const ImportanceInput = ({ importance, updateFormValue }) => {
  return (
    <select 
      name="importance"
      value={importance} 
      onChange={(e) => updateFormValue(e.target.name, e.target.value)}
    >
      <option value=""></option>
      <option value="important">important</option>
      <option value="less important">less important</option>
      <option value="not important">not important</option>
    </select>
  )
}

export default ImportanceInput
