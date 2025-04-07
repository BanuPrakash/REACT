import { Component } from "react";

export default class CustomerRow extends Component {

    render() {
        let friend = this.props.customer;
        return <div>
            {friend.firstName}, {friend.lastName}
            &nbsp;
            <button type="button">Delete</button>
        </div>
    }
}