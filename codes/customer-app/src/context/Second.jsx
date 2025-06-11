import React, { useContext } from 'react'
import { PersonContext } from './Parent';

export default function Second() {
    // consumer
    let { name, age, setAge } = useContext(PersonContext);
    return (
        <div>
            Second <br />
            Name: {name} <br />
            Age : {age} <br />
            <button type='button' onClick={() => setAge(age + 5)}>Change Age</button>
        </div>
    )
}
