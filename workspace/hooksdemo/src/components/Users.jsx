import React, { useEffect, useState } from 'react'
import UserDetail from './UserDetail';

export default function Users({ setNewUser }) {
    let [users, setUsers] = useState(null);

    // componentDidMount --> empty dependency [], gets called only once when component is loaded
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(respose => respose.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div>
            <h1>Users</h1>
            {
                users && users.map(user => <div key={user.id}
                    onMouseOver={() => setNewUser(user.id)}>{user.username}, {user.email}
                </div>)
            }
        </div>
    )
}
