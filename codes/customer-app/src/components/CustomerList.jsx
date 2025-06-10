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
    render() {
        return (
            <div>
                <Filter />
                {
                    this.state.customers.map(customer => <CustomerRow customer={customer}/>)
                }
            </div>
        )
    }
}
