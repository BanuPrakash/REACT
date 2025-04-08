import React, { useEffect, useState } from 'react'

export default function UserDetail({ id }) {
    let [user, setUser] = useState();

    // componentDidUpdate, called whenever props or state changes
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/" + id)
            .then(respose => respose.json())
            .then(data => setUser(data));

    }, [id]); // call whenever id changes

    // avoid this --> empty dependency --> it is also componentDidUpdate
    useEffect(() => {
        console.log("gets called whenever any props or any state changes...")
    });

    return (
        <div>
            <h1>UserDetail</h1>
            {user && (<div>
                {user.username},
                {user.website} , {user.phone}, {user.address.city}
            </div>)}
        </div>
    )
}
