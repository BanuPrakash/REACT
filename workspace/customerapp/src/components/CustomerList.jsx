import { Component } from "react";
import CustomerRow from "./CustomerRow";

export default class CustomerList extends Component {
    state = {
        "customers": [
            { "id": 1, "firstName": "Rachel", "lastName": "Green" },
            { "id": 2, "firstName": "Ross", "lastName": "Geller" },
            { "id": 3, "firstName": "Chandler", "lastName": "Bing" },
            { "id": 4, "firstName": "Monica", "lastName": "Geller" },
            { "id": 5, "firstName": "Phobe", "lastName": "Buffay" }
        ]
    }

    deleteCustomer(id) {
        let custs = this.state.customers.filter(c => c.id !== id);
        // need to update the state

        // avoid 
        // this.state.customers = custs; //==> here state gets updated but reconcilliation won't happen

        // right way to update the state
        this.setState({
            "customers": custs
        })
    }
    render() {

        return <div>
            {
                this.state.customers.map(c => <CustomerRow
                    delEvent={(id) => this.deleteCustomer(id)}
                    customer={c} />)
            }
        </div>

    }
}