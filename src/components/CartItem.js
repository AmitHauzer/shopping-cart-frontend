import React from 'react'

function CartItem({ item }) {
  return (
    <div>
      <img src={'http://localhost:8000/static' + item.product.image} alt={item.product.name} />
      <h3>{item.product.name}</h3>

      <div>{item.product.description}</div>
      <div>{item.product.price}</div>
      <div>{item.quantity}</div>
    </div>
  )
}

export default CartItem