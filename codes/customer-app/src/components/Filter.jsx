import React from 'react'

// return JSX
export default function Filter(props) {
  return (
    <div>
        <input type='text' 
        placeholder='search by name'
        onChange={(evt) => props.filterEvent(evt.target.value)}
        />
    </div>
  )
}

