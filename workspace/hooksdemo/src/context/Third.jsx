import React, { useContext } from 'react'
import { PersonContext } from './PersonProvider'

export default function Third() {
let {name, age} = useContext(PersonContext);

  return (
    <div>
        Third: <br />
        Name : {name} <br />
        Age : {age} <br />
    </div>
  )
}
