import './MainHeader.css'
import { Link } from 'react-router-dom'
import Nav from './Nav'

export const MainHeader = () => {
  return (
    <div className='navbar'>
      <header>
        <h3>EasyShop</h3>
      </header>
      <Nav />
    </div>
  )
}
