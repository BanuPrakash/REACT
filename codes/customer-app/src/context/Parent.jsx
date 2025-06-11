import React, { createContext, useState } from 'react'
import First from './First';

let PersonContext = createContext();
export default function Parent() {
    let [name, setName] = useState("Roger");
    let [age, setAge] = useState(35);

    return (
        <div>
            <PersonContext.Provider value={{name, age, setAge}}>
                Parent {name}, {age}
                <First />
            </PersonContext.Provider>
        </div>
    )
}

export {
    PersonContext
}