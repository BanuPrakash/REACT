import React, { Component } from 'react'

export default class AgeComponent extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.age !== nextProps.age
    }
    render() {
        console.log("AgeComponent renders")
        return (
            <div>
                AgeComponent : {this.props.age}
            </div>
        )
    }
}
