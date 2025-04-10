import React from 'react'
import { useCustomerQuery, useCustomersQuery } from '../redux/api/customerApi'
/*
    isLoading: true when loading for first time
    isFetching: true when loaded from cache
*/
export default function Customers() {
    const { data: users, error, isFetching, isLoading, isError, isSuccess } = useCustomersQuery();
    return (
        <div> <h1>Customers using RTK Query</h1>
            {isLoading && <h1>Loading ....</h1>} <br />
            {isFetching && <h1>Fetching ....</h1>} <br />
            {isError && <h1>Boom :-( </h1>} <br />
            {
                isSuccess && (
                    <div>
                        {users.map(user => {
                            return <div key={user.id}>
                                {user.username} <br />
                                <CustomerDetails id={user.id} />
                            </div>
                        })
                        }
                    </div>
                )
            }
        </div>
    )
}

const CustomerDetails = ({ id }: { id: string }) => {
    const { data } = useCustomerQuery(id);
    return <pre>{JSON.stringify(data)}</pre>
}
