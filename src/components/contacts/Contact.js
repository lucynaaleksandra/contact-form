import './contact.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Consumer } from '../../context'
import { Link } from 'react-router-dom'


class Contact extends Component {
  state = {
    showContactInfo: false
  }

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      dispatch({ type: "DELETE_CONTACT", payload: id })
    } catch (exception) {
      dispatch({ type: "DELETE_CONTACT", payload: id })
    }
  }


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
                <i
                  onClick={() => 
                    this.setState({ 
                      showContactInfo: !this.state.showContactInfo 
                    })}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }} />
                <i
                  className="fas fa-times"
                  style={{
                    cursor: "pointer",
                    float: "right",
                    color: "red"
                  }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)} />

                <Link to={`contact/edit/${id}`} >
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem"
                    }} ></i>
                </Link>
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