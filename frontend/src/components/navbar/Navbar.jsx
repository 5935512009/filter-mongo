import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='nav-menu'>
        <ul className='nav-list'>
          <li><Link to="./filter">Filter</Link></li>
        </ul>
      </div>
    </div>
  )
}
