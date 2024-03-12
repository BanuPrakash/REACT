import React, { useEffect, useState } from 'react'

export default function EffectExample() {
    let [users, setUsers] = useState([]);

    // componentDidMount
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
            })
    }, []);

    if (users.length === 0) {
        return <h1>Loading....</h1>
    } else {
        return (
            <div>
                {
                    users.map(user => <h1 key={user.id}>{user.email}</h1>)
                }
            </div>
        )
    }
}
