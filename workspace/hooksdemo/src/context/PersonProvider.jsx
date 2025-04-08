import React, { Component, createContext } from 'react'

const PersonContext = createContext(); // placeholder for data

export {PersonContext}
export default class PersonProvider extends Component {
  state = {
    name: "Roger",
    age: 24
  }

  updateAge() {
    this.setState({
        age: this.state.age + 1
    })
  }

  render() {
    return (
      <div>
        <PersonContext.Provider value={{...this.state, updateAge: this.updateAge.bind(this)}}>
            {this.props.children}
        </PersonContext.Provider>
      </div>
    )
  }
}
