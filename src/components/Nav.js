import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <Link to='/'>Home</Link>
        <br/>
        <Link to='/products'>Products</Link>
        <br/>
        <Link to='/cart'>Cart</Link>
        <hr/>
    </div>
  )
}

export default Nav