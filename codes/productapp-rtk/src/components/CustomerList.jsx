import React from 'react'
import { customersApi, useCustomersQuery, useNewCustomerMutation } from '../redux/api/customerApi'
export default function CustomerList() {
    const { data, error, isLoading, isFetching, isSuccess, isError } = useCustomersQuery();
    return (
        <div>
            <CustomerForm />
            {isLoading && <h1>Loading....</h1>}
            {isFetching && <h1>Fetching....</h1>}
            {error && <h1>Boom :-( </h1>}
            {data && data.map(customer => <div key={customer.id}>{customer.name}</div>)}
        </div>
    )
}

const CustomerForm = () => {
    let { refetch } = useCustomersQuery();
    let [addCustomer] = useNewCustomerMutation()
    async function onSubmit() {
        let customer = {
            id: 7,
            name: 'Harry'
        }
        await addCustomer(customer);
        refetch();
    }
    return <div>
        <button onClick={onSubmit}>Add Customer</button>
    </div>
}