import React from 'react'

function CartItem({ item }) {
  return (
    <div>
      <h3>{item.name}</h3>
      <div>{item.description}</div>
      <div>{item.price}</div>
    </div>
  )
}

export default CartItem