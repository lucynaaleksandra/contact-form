import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Contact from './components/Contact'
import Header from './components/Header'
import Contacts from './components/Contacts'
import { Provider } from './context'

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Contacts />
            {/* <Contact 
          name="John Smith" 
          email="john@john.com" 
          phone="555-555-5555" />
        <Contact 
          name="Jane Doe" 
          email="jane@jane.com" 
          phone="333-333-3333" />
        <Contact 
          name="Oliv Mile" 
          email="oliv@oliv.com" 
          phone="888-888-8888" /> */}
          </div>
        </div>
      </Provider>
    )
  }
}

export default App