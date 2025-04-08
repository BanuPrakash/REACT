import React, { Component } from 'react'

export default class NameComponent extends Component {
    shouldComponentUpdate(prevProps, prevState) {
        if (this.props.name === prevProps.name) return false;
        return true;
    }
    render() {
        console.log("NameComponent renders!!!")
        return (
            <div>In NameComponent name is: {this.props.name}</div>
        )
    }
}
