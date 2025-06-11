import React, { useEffect, useState } from 'react'
import Users from './Users';
import UserDetails from './UserDetails';

export default function UsersComponent() {
    let [users, setUsers] = useState([]);
    let [id, setUid] = useState(1);
    useEffect(() => {
        console.log("get all users!!!")
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data));

    }, []); // like componentDidMount --> empty dependency
   
    return (
        <div>
            UsersComponent
           <Users users={users} setUid={setUid}/>
           <UserDetails id={id}/>
        </div>
    )
}
