import React, { Component, PureComponent } from 'react'

export default class NameChild extends PureComponent {
//   shouldComponentUpdate(prevProps, prevState) {
//     if (this.props.name === prevProps.name) {
//         return false;
//     }
//     return true;
// }
  render() {
    console.log("<NameChild /> renders");
    return (
      <div>Name Child , Name : {this.props.name} </div>
    )
  }
}
