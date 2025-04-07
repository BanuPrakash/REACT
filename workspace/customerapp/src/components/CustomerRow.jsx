import { Component } from "react";

// export default class CustomerRow extends Component {

//     render() {
//         let friend = this.props.customer;
//         return <div>
//             {friend.firstName}, {friend.lastName}
//             &nbsp;
//             <button type="button" 
//             onClick={() => this.props.delEvent(friend.id)}>Delete</button>
//         </div>
//     }
// }

export default function CustomerRow(props) {
    let friend = props.customer;
    return <div>
        {friend.firstName}, {friend.lastName}
        &nbsp;
        <button type="button"
            onClick={() => props.delEvent(friend.id)}>Delete</button>
    </div>
}