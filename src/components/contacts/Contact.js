import './contact.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../../context'

class Contact extends Component {
  state = {
    showContactInfo: false
  }

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id })
  }

  // onShowClick = () => {
  //   this.setState({  
  //     // toggle
  //     showContactInfo: !this.state.showContactInfo
  //   })
  // }

  render() {
    const { id, name, email, phone } = this.props.contact
    const { showContactInfo } = this.state

    return (
      <Consumer>
        {value => {
          const { dispatch } = value

          return (
            <div className="card card-body mb-3">
              <h5>
                {name}{' '}
                {/* OR onClick={this.onShowClick.bind(this, name)}  */}
                {/* OR onClick={this.onShowClick} */}
                <i
                  onClick={() => this.setState({ showContactInfo: !this.state.showContactInfo })}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }} />
                <i className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)} />
              </h5>

              {/* toggle */}
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}

            </div>
          )
        }}
      </Consumer>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
  // deleteClickHandler: PropTypes.func.isRequired
}

export default Contact