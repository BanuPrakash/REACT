import React, { useEffect, useState } from 'react'

export default function EffectExample() {
    let [users, setUsers] = useState([]);
    let [id, setId] = useState(0);
    let [user, setUser] = useState(null);

    // componentDidMount
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
            })
    }, []);

    // componentDidUpdate
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(response => response.json())
            .then(data => {
                setUser(data);
            })
    }, [id]);


    if (users.length === 0) {
        return <h1>Loading....</h1>
    } else {
        return (
            <div>
                {
                    users.map(user => <h1 key={user.id} onMouseEnter={() => setId(user.id)}>{user.email}</h1>)
                }
                <div>
                    <h1>Details</h1>
                    Company: {user?.company.name} <br />
                    Website: {user?.website} <br />
                </div>

            </div>
        )
    }

}
