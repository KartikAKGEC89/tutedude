import React from 'react'

const Navbar = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="navbar-logo">LOGO</div>
          <div className="navbar-buttons">
            <button className="login-btn">Login</button>
            <button className="signup-btn">Signup</button>
          </div>
        </nav>
      </header>
      <div className="nav-links-container">
        <div className="nav-links-content">
          <a href="#">Overview</a>
          <a href="#">Curriculum</a>
          <a href="#">Refund</a>
          <a href="#">Testimonials</a>
        </div>
      </div>
    </>
  )
}

export default Navbar
