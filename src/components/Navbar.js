import React from 'react'
import logo from '../images/logo192.png'
function Navbar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
     SkillShare
    </a>
  </div>
</nav>
    </div>
  )
}

export default Navbar
