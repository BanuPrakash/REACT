import React, { Component } from 'react'

export default class NameComponent extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.name !== nextProps.name
    }
    render() {
        console.log("NameComponent renders")
        return (
            <div>
                NameComponent: {this.props.name}
            </div>
        )
    }
}
