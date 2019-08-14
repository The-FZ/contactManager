import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact/add">Add contact </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
