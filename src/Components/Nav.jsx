import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="explore">Explore</NavLink>
        <NavLink>Playlists</NavLink>
        <NavLink to="watchlater">Watch Later</NavLink>
      </ul>
    </div>
  )
}

export default Nav
