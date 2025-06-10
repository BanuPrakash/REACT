import React, { Component } from 'react'
import Filter from './Filter'
import CustomerRow from './CustomerRow'

export default class CustomerList extends Component {
    state = {
        "customers": [{
            "id": 1,
            "name": "Rachel Green",
            "played_by": "Jennifer Aniston"
        },
        {
            "id": 2,
            "name": "Monica Geller",
            "played_by": "Courteney Cox"
        },
        {
            "id": 3,
            "name": "Phoebe Buffay",
            "played_by": "Lisa Kudrow"
        },
        {
            "id": 4,
            "name": "Chandler Bing",
            "played_by": "Matthew Perry"
        },
        {
            "id": 5,
            "name": "Joey Tribbiani",
            "played_by": "Matt LeBlanc"
        },
        {
            "id": 6,
            "name": "Ross Geller",
            "played_by": "David Schwimmer"
        }]
    }

    deleteCustomer(id) {
        let custs = this.state.customers.filter(c => c.id !== id);

        // this.state.customers = custs; // update the state, reconcillation won't happen

        // update the state
        this.setState({
            customers: custs
        })

        console.log(this.state.customers.length);
    }

    render() {
        return (
            <div>
                <Filter />
                {
                    this.state.customers.map(customer => <CustomerRow
                        delEvent={(id) => this.deleteCustomer(id)}
                        customer={customer} key={customer.id} />)
                }
            </div>
        )
    }
}
