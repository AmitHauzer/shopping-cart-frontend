import { useState } from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaShekelSign } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';




function Product({ product, getCartItems, exist, cartId, removeItemFromCart, path }) {
    const [quantity, setQuantity] = useState(1)

    const addToCart = async () => {
        let item = {
            product: product.id,
            cart: cartId,
            quantity
        }

        await fetch(`${path}/cart/${cartId}/cartitems/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        })
        console.log('added to cart.')
        getCartItems()
    }


    return (
        <Col>
            <Card style={{ width: '18rem' }} className="card shadow-sm">
                <Card.Img variant="top" height="290px" src={`${path}/static` + product.image} alt={product.name} />
                <Card.Body>

                    <Card.Title>{product.name}{exist && <span className="badge text-bg-success float-end">In The Cart</span>}</Card.Title>
                    <Card.Text>
                        {product.description || <br />}
                    </Card.Text>

                    {exist ? <div><br /><br /><Button variant='outline-danger' type='button' size="sm" onClick={() => removeItemFromCart({ productId: product.id, cartId: cartId })}><MdDelete /></Button></div> :
                        <form className='form-inline'>

                            <div className='form-group'>
                                <label>Quantity:</label>
                                <input className='from-control float-end' type='number' min={1} max={50} value={quantity} onChange={e => setQuantity(parseInt(e.target.value))} />
                            </div><br />
                            <Button variant="primary" type='button' size="sm" onClick={addToCart}>Add to Cart</Button>
                        </form>}
                </Card.Body>
                <Card.Footer><small className="float-end text-muted">{product.price} <FaShekelSign size={'10px'} /></small></Card.Footer>
            </Card>
        </Col >
    )
}

export default Product