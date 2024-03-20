import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ol>
        <li>
            <Link to='/home'>Home</Link>
        </li>
        <li>
            <Link to='/about'>About</Link>
        </li>
        <li>
            <Link to='/main'>Main</Link>
        </li>
      </ol>
    </div>
  )
}

export default Navbar
