import './MainHeader.css'
import { Link } from 'react-router-dom'
import Nav from './Nav'

export const MainHeader = ({ index }) => {
  return (
    <div className='navbar'>
      <header>
        <h3>EasyShop</h3>
      </header>
      <Nav index={index} />
    </div>
  )
}
