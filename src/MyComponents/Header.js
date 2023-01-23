import React from 'react'
import PropTypes from 'prop-types'

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" to="#"><b>{props.title}</b></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" to="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active">About</a>
          </li>
        </ul>
        {props.searchBar? <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />&nbsp;
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> : "No Search Bar"}
      </div>
    </div>
  </nav>
  )
}

// props.searchBar? = if theri is search bar then it will display it
// otherwise it will follow another condition.

// Default props 
// Thsi is used to display default title if user did not send any.
Header.defaultProps = {
    title: "Your title here",
    searchBar: true
}


// This is recommended because if we pass numbers in place of string then we should get error.
// It tells about expected datatype.
Header.proTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
}
