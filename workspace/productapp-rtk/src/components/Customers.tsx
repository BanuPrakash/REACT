import React from 'react'
import { useCustomerPostMutation, useCustomerQuery, useCustomersQuery } from '../redux/api/customerApi'
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
                         <CustomerForm />
                        {users.map(user => {
                            return <div key={user.id}>
                                {user.username} <br />
                               
                                 {/* <CustomerDetails id={user.id} />  */}
                            </div>
                        })
                        }
                    </div>
                )
            }
        </div>
    )
}

const CustomerForm = () => {
    const [addCustomer] = useCustomerPostMutation();
    // const {refetch} = useCustomersQuery();
    async function handleSubmit() {
        const customer = {
            "id": "11",
            "name": "Jack",
            "username": "Jackson",
            "email": "jack@cisco.com"
        }

        await addCustomer(customer);
        // refetch();
    }
    return <div>
        <button type='button' onClick={handleSubmit}>Add Customer</button>
    </div>
}
const CustomerDetails = ({ id }: { id: string }) => {
    const { data } = useCustomerQuery(id, {
        pollingInterval: 1000
    });
    return <pre>{JSON.stringify(data)}</pre>
}
