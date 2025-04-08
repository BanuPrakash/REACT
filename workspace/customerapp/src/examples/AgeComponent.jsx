import React, { Component } from 'react'

export default class AgeComponent extends Component {
    shouldComponentUpdate(prevProps, prevState) {
        if(this.props.age === prevProps.age) return false;
        return true;
    }

    render() {
        console.log("AgeComponent renders...")
        return (
            <div>In AgeComponent age is : {this.props.age} </div>
        )
    }
}
