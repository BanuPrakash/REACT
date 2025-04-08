import React, { useContext } from 'react'
import Third from './Third'
import { PersonContext } from './PersonProvider'

export default function Second() {
let {updateAge} = useContext(PersonContext); // Consumer

  return (
    <div>
        Second
        <button type="button" onClick={updateAge}>Change Age</button>
        <Third />
    </div>
  )
}
