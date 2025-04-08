import React, { useState } from 'react'

export default function ControlledComponent() {
    let [name, setName] = useState("");
    let [age, setAge] = useState(0);
    function doSubmit() {
        // make api call and send name and age
    }
  return (
    <div>
        <h1>ControlledComponent</h1>
        Name : <input type="text" onChange={(evt) => setName(evt.target.value)}/> <br />
        Age : <input type="number" onChange={(evt) => setAge(+evt.target.value)}/> <br />

       <button type='button' onClick={doSubmit}>Submit</button>
    </div>
  )
}
