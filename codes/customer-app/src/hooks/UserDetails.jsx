import React, { useEffect, useState } from 'react'

export default function UserDetails({ id }) {
    let [user, setUser] = useState(null);
    useEffect(() => {
        console.log("get user for id ", id)
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(response => response.json())
            .then(data => setUser(data));
    }, [id]); // componentDidUpdate, call whenever id changes
    return (
        <div>
            <h1>UserDetails</h1>
            {
                user && (
                    <div>
                        Name: {user.name} <br />
                        Email : {user.email} <br />
                        Company: {user.company.name}
                    </div>
                )
            }

        </div>
    )
}
