import React, { useState } from 'react'

export default function StateCompExample() {
    let [name, setName] = useState("Roger");
    let [age, setAge] = useState(18);

    return (
        <div>
            Name: {name} <br />
            Age: {age} <br />
            <button type='button' onClick={() => setAge(age + 1)}>Change Age</button> <br />
        </div>
    )
}
