import { useCustomersQuery, useAddCustomerMutation, useCustomerQuery } from '../redux/api/customerApi';

export default function Customers() {
    const { data: customers, error, isLoading, isFetching, isSuccess } = useCustomersQuery();
    return (
        <div className='container'>
            {isLoading && <h1>Loading....</h1>}
            {error && <h1>Error :-( </h1>}
            {isSuccess && (
                <div>
                    {
                        customers.map(customer => <div key={customer.id}>
                            Name: {customer.firstName}
                            <span><CustomerDetails id={customer.id} /></span>

                        </div>)
                    }
                    <AddCustomer />
                </div>
            )}
        </div>
    )
}

// props ==> {"id": 1}

const CustomerDetails = ({ id }: { id: string }) => {
    const { data } = useCustomerQuery(id, {
        pollingInterval: 30000
    });
    return (
        <pre>{JSON.stringify(data)}</pre>
    )
}

const AddCustomer = () => {
    const [addCustomer] = useAddCustomerMutation();
    // const { refetch } = useCustomersQuery();
    async function addHandler() {
        let customer = {
            "id": "5",
            "firstName": "Peter",
            "lastName": "Pan"
        }
        await addCustomer(customer);
        // refetch();
    }
    return <>
        <button onClick={addHandler}>Add Customer</button>
    </>
}