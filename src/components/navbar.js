import React from "react"
import { Link } from "gatsby"
import {NavDropdown} from "react-bootstrap"

const Navbar = () => {
    return(
<>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">A FREE PATH TO BOOKS</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarColor03">
    <ul className="navbar-nav ml-auto ">
      <li className="nav-item active">
      <Link to="/" class="nav-link ">Home</Link>
      </li>

      <NavDropdown title="Login" id="basic-nav-dropdown">
        <NavDropdown.Item> <Link to="/login">Admin Login</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/studentL">Student Login</Link></NavDropdown.Item>
      </NavDropdown>

      <li class="nav-item">
        <Link to="/register" class="nav-link ">Register    
        <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
      <Link to="/feedback" class="nav-link ">Feedback</Link>
      </li>
    </ul>
  </div>
</nav>
</>
    )
}

export default Navbar