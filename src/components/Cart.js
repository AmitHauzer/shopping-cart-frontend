import React from 'react'
import CartItem from './CartItem'

function Cart({ cartitems }) {
  return (
    <div>
      <h1>Cart</h1>
      {cartitems.map(item => <CartItem key={item.id} item={item} />)}
    </div>
  )
}

export default Cart