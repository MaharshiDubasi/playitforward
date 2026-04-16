import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import PIFLogo from '../images/logo/PIFLogo.png'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="navbar-brand">
          <img src={PIFLogo} alt="PlayItForward" className="brand-logo" />
        </div>
        <button
          type="button"
          className={`navbar-toggle${isOpen ? ' open' : ''}`}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`navbar-nav${isOpen ? ' open' : ''}`}>
        <ul className="navbar-links">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={() => setIsOpen(false)}
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={() => setIsOpen(false)}
            >
              Team
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
