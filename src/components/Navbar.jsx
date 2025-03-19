import React from 'react'
// import PropTypes from 'prop-types';
import CircularPalette from './CircularPalette';
// import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">

    <a className='navbar-brand' href="#">TextMaster</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
          {/* <Link className='nav-link active' arial-current="page" to="/">Home</Link> */}
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
          {/* <Link className='nav-link' arial-current="page" to="/about">About Us</Link> */}
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Blogs
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Test</a>
        </li>
      </ul>
      <form className="d-flex mx-3">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
      <CircularPalette bgColor = {props.bgColor} />
      <div class={`form-check form-switch mx-2 text-${props.mode === 'dark'?'white':'black'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable dark mode</label>
      </div>
    </div>
  </div>
</nav>

     </div>
  )
}

// Navbar.propTypes = { title:  PropTypes.string.isRequired,};

// Navbar.defaultProps = {
//     title: "Title"
// };

