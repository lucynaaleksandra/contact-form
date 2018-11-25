import React, { Component } from 'react'
import { Consumer } from '../../context'
import TextInputGroup from '../layout/TextInputGroup'
import axios from 'axios'


class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  }

  async componentDidMount() {
    // to get id from parameter use this.props.match.params... 
    const { id } = this.props.match.params
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

    const contact = response.data
    
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    })
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = async (dispatch, e) => {
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
              <div className="card-header">Edit Contact</div>
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
                  <input
                    type="submit"
                    value="Update Contact"
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

export default EditContact