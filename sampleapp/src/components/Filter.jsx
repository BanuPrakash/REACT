import React from 'react'

export default function Filter(props) {
  return <input type="text" 
  onChange={(evt) => props.filterEvt(evt.target.value)}  
  placeholder='Search by name' />
}
