import React from 'react'

function CartItem({ item }) {
  return (
    <tr>
      <td>
        <img src={'http://localhost:8000/static' + item.product.image} alt={item.product.name} width='200' />
      </td>
      <td>{item.product.name}</td>
      <td>{item.product.description}</td>
      <td>{item.product.price}</td>
      <td>{item.quantity}</td>
      <td>{item.product.price * item.quantity}</td>
    </tr>
  )
}

export default CartItem