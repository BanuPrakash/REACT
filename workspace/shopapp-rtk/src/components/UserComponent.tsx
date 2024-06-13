import React from 'react'
import { useAddUserMutation, useUserQuery, useUsersQuery } from '../redux/api/UserApi'
import User from '../model/User';

export default function UserComponent() {
    // useUserQuery("3", {
    //     pollingInterval: 3000
    // })
    const { data, error, isLoading, isFetching, isSuccess } = useUsersQuery(); // hook
    return (
        <div>
            <h1>RTK query</h1>
            {isLoading && <h2>Loading...</h2>}
            {isFetching && <h2>fetching...</h2>}
            {error && <h2>Something went wrong :-(</h2>}
            {data?.map(user => {
                return <div key={user.id}>
                    {user.name}, {user.email}
                </div>
            })}

            <AddCustomer />
        </div>
    )
}

function AddCustomer() {
    const [addUser] = useAddUserMutation();
    // const {refetch} = useUsersQuery();
    async function handleSubmit() {
        const user: User = {
            id: 23,
            name: "A",
            username: "A1",
            email: "a@adobe.com"
        }
        await addUser(user);
        //    refetch();
    }
    return <>
        <button type='button' onClick={() => handleSubmit()}>Add Customer</button>
    </>
}
