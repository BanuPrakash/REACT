import React, { Component } from 'react'

export default class AgeChild extends Component {
    shouldComponentUpdate(prevProps, prevState) {
        if (this.props.age === prevProps.age) {
            return false;
        }
        return true;
    }
    render() {
        console.log("<AgeChild /> renders");
        return (
            <div>AgeChild, Age: {this.props.age} </div>
        )
    }
}
