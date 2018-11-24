import React, { Component } from 'react'
import uuid from 'uuid'
import { Consumer } from '../../context'
import TextInputGroup from '../layout/TextInputGroup'

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (dispatch, e) => {
    e.preventDefault()

    const { name, email, phone } = this.state

    // check for errors 
    if(name === "") {
      this.setState({ errors: { name: "Name is required" }})
      return
    }
    if(email === "") {
      this.setState({ errors: { email: "Email is required" }})
      return
    }
    if(phone === "") {
      this.setState({ errors: { phone: "Phone is required" }})
      return
    }

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    }

    dispatch({ type: "ADD_CONTACT", payload: newContact })

    // clear state
    this.setState({
      name: "",
      email: "",
      phone: "", 
      errors: {}
    })

    // redirect
    this.props.history.push("/")
  }

  render() {
    const { name, email, phone, errors } = this.state

    return (
      <Consumer>
        {value => {
          const { dispatch } = value

          return (
            <div className="card mb-3" >
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    name="name"
                    label="Name"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={this.onChange}
                    errors={errors.name}
                  />
                  <TextInputGroup
                    name="email"
                    label="Email"
                    placeholder="Enter Email... "
                    value={email}
                    onChange={this.onChange}
                    errors={errors.email}
                  />
                  <TextInputGroup
                    name="phone"
                    label="Phone"
                    placeholder="Enter Phone..."
                    value={phone}
                    onChange={this.onChange}
                    errors={errors.phone}
                  />
                  {/* <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="Enter Email..."
                      value={email}
                      onChange={this.onChange}
                    />
                  </div> */}
                  <input
                    type="submit"
                    value="Add Contact"
                    style={{ backgroundColor: "lightGrey" }}
                    className="btn btn-block btn-dash-white" />
                </form>
              </div>
            </div>
          )
        }}

      </Consumer>
    )
  }
}

export default AddContact