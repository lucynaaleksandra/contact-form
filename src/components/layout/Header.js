import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import { red } from 'ansi-colors';

const Header = (props) => {
  const { branding } = props

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">{branding}</a>
        <div>
          <ul className="navbar-nav mr-aut0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home"></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus"></i>
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question"></i>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav >

    // <div>
    //   <h1 style={headingStyle}>{branding}</h1>
    // </div>
  )
}

Header.defaultProps = {
  branding: "My App"
}

Header.propTypes = {
  branding: PropTypes.string.isRequired
}

// const headingStyle = {
//   color: "green",
//   fontSize: 50
// }

export default Header