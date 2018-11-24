import './contact.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Contact extends Component {
  state = {
    showContactInfo: false
  }

  // onShowClick = () => {
  //   this.setState({  
  //     // toggle
  //     showContactInfo: !this.state.showContactInfo
  //   })
  // }

  render() {
    const {
      name,
      email,
      phone
    } = this.props.contact

    const { showContactInfo } = this.state

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{' '}
          {/* OR onClick={this.onShowClick.bind(this, name)}  */}
          {/* OR onClick={this.onShowClick} */}
          <i
            onClick={() => this.setState({ showContactInfo: !this.state.showContactInfo })}
            className="fas fa-sort-down">
          </i>
        </h4>

        {/* toggle */}
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}

      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
}

export default Contact