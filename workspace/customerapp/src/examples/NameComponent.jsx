// import React, { Component } from 'react'

// export default class NameComponent extends Component {
//     shouldComponentUpdate(prevProps, prevState) {
//         if (this.props.name === prevProps.name) return false;
//         return true;
//     }
//     render() {
//         console.log("NameComponent renders!!!")
//         return (
//             <div>In NameComponent name is: {this.props.name}</div>
//         )
//     }
// }

import React from 'react'

function NameComponent(props) {
    console.log("NameComponent renders!!!")
    return (
        <div>In NameComponent name is: {props.name}</div>
    )
}

const MemoNameComponent = React.memo(NameComponent);
export default MemoNameComponent;
