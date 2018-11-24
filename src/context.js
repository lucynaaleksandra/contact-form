import React, { Component } from 'react'


const Context = React.createContext()

const reducer = (state, action) => {
  switch(action.type) {
    case "DELETE_CONTACT":
    return {
      ...state, 
      contacts: state.contacts.filter(contact => contact.id !== action.payload)
    }
    case "ADD_CONTACT":
    return {
      ...state, 
      contacts: [action.payload, ...state.contacts]
    }
    default: 
      return state
  }
}
export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Smith",
        email: "john@john.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Jane Doe",
        email: "jane@jane.com",
        phone: "333-333-3333"
      },
      {
        id: 3,
        name: "Olivia Miles",
        email: "olivia@olivia.com",
        phone: "888-888-8888"
      }
    ], 
    dispatch: action => this.setState(state => reducer(state, action))
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer

// export default Provider 