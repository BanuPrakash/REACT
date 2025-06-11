import React, { useContext } from 'react'
import { PersonContext } from './Parent';

export default function Second() {
    // consumer
    let { name, age } = useContext(PersonContext);
    return (
        <div>
            Second <br />
            Name: {name} <br />
            Age : {age} <br />
        </div>
    )
}
