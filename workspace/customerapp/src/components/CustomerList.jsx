import { Component } from "react";
import CustomerRow from "./CustomerRow";
import Filter from "./Filter";

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

    // life cycle method
    componentDidMount() {
        // make a copy which will be prestine
        this.setState({
            original: this.state.customers
        })
    }
    deleteCustomer(id) {
        let custs = this.state.customers.filter(c => c.id !== id);
        // need to update the state

        // avoid 
        //this.state.customers = custs; //==> here state gets updated but reconcilliation won't happen

        // right way to update the state
        this.setState({
            "original": custs,
            "customers": custs
        })
    }

    filterCustomers(txt) {
        let custs = this.state.original.filter(c => c.lastName.toLowerCase().indexOf(txt.toLowerCase()) >= 0);
        this.setState({
            "customers": custs
        })
    }
    render() {

        return <div>
            <Filter filterEvent={(txt) => this.filterCustomers(txt)} />
            {
                this.state.customers.map(c => <CustomerRow
                    key={c.id}
                    delEvent={(id) => this.deleteCustomer(id)}
                    customer={c} />)
            }
        </div>

    }
}