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

    render() {

        return <div>
                {
                    this.state.customers.map(c => <CustomerRow customer={c}/>)
                }
        </div>
        
    }
}