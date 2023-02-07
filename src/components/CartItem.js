import React from 'react'
import { MdDelete } from 'react-icons/md';


function CartItem({ item, index, removeItemFromCart, cartId }) {

  return (
    <tr >
      <th>{index + 1}</th>
      <td>
        <img src={'http://localhost:8000/static' + item.product.image} alt={item.product.name} width='200px' />
      </td>
      <td>{item.product.name}</td>
      <td>{item.product.description}</td>
      <td>{item.product.price}</td>
      <td>{item.quantity}</td>
      <td>{item.product.price * item.quantity}</td>
      <td><MdDelete size={20} onClick={() => removeItemFromCart({ product: item.product, cartId: cartId })} /></td>
    </tr>
  )
}

export default CartItem