import { Component } from "react";

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
        let friend = this.state.customers[0];
        return <div>
            {friend.firstName}, {friend.lastName}
        </div>
    }
}