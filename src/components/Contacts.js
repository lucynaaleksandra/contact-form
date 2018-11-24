import React, { Component } from 'react'
import Contact from './Contact'

class Contacts extends Component {
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
        name: "Oliv Mile",
        email: "oliv@oliv.com",
        phone: "888-888-8888"
      }
    ]
  }

  render() {
    const { contacts } = this.state

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts