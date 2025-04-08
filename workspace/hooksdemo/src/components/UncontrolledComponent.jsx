import React, { useRef, useState } from 'react'

export default function UncontrolledComponent() {
    let nameRef = useRef();
    let ageRef = useRef(); 
    function doSubmit() {
        let user = {
            name: nameRef.current.value,
            age: ageRef.current.value
        }
        console.log(user); 
    }
  return (
    <div>
        <h1>ControlledComponent</h1>
        Name : <input type="text" ref={nameRef}/> <br />
        Age : <input type="number" ref={ageRef}/> <br />

       <button type='button' onClick={doSubmit}>Submit</button>
    </div>
  )
}
