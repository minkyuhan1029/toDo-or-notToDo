import React from 'react'

function FilterButton(props) {
  return (
    <button type="button" className="toggle-btn" onClick={()=>props.setFilter(props.name)}>
      <span>{props.name}</span>
    </button>
  )
}

export default FilterButton
