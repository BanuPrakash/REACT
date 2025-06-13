import React, { useCallback, useState } from 'react'
import NameComponent from './NameComponent'
import AgeComponent from './AgeComponent'

export default function ParentComponent() {
    let [name, setName] = useState("Roger");
    let [age, setAge] = useState(24);

    // function updateAge() {
    //     setAge(age + 1)
    // }

    // function updateName() {
    //     setName(name + "..")

    // }

    const updateAge = useCallback(() => {
        setAge(age + 1)
    }, [age]);

    const updateName = useCallback(() => {
        setName(name + "..")
    }, [name]);

    console.log("Parent Renders")
    return (
        <div>
            <h1>Parent Component</h1>
            <NameComponent name={name} updateName={updateName} />
            <AgeComponent age={age} updateAge={updateAge} />
        </div>
    )
}

