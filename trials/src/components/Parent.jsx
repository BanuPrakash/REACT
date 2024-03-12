import React, { Component } from 'react'
import NameChild from './NameChild';
import MemoAgeChild from './AgeChild';

export default class Parent extends Component {
  state = {
    name : "Roger",
    age: 24
  }
  render() {
    console.log("Parent renders!!!");
    return (
      <div>
        Parent <br />
        Name: {this.state.name} <br />
        Age: {this.state.age} <br />
        <button type='button' onClick={() => this.setState({age: this.state.age + 1})}>Change Age</button> <br />
        <button type='button' onClick={() => this.setState({name: this.state.name + "..."})}>Change Name</button> <br />
        <NameChild name={this.state.name} /> <br />
        <MemoAgeChild age={this.state.age} />
      </div>
    )
  }
}
