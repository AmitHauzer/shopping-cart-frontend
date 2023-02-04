import { useState } from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function Product({ product, onRefresh, exist, cartId }) {
    const [quantity, setQuantity] = useState(1)

    const addToCart = async () => {
        let item = {
            product: product.id,
            cart: cartId,
            quantity
        }

        await fetch(`http://localhost:8000/cart/cartitems/1/add/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        })
        console.log('added to cart.')
        onRefresh()
    }

    const removeItemFromCart = async () => {
        let item = {
            product: product.id,
            cart: cartId,
        }
        await fetch(`http://localhost:8000/cart/cartitems/1/delete/`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        })
        console.log('remove.')
        onRefresh()
    }


    return (
        <Col>
            <Card style={{ width: '18rem' }} class="card shadow-sm">
                <Card.Img variant="top" height="290px" src={'http://localhost:8000/static' + product.image} alt={product.name} />
                <Card.Body>

                    <Card.Title>{product.name}{exist && <span class="badge text-bg-success float-end">In The Cart</span>}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>

                    {exist ? <div><br /><br /><Button variant='outline-danger' type='button' size="sm" onClick={removeItemFromCart}>Remove</Button></div> :
                        <form className='form-inline'>

                            <div className='form-group'>
                                <label>Quantity:</label>
                                <input className='from-control float-end' type='number' min={1} max={50} value={quantity} onChange={e => setQuantity(parseInt(e.target.value))} />
                            </div><br />
                            <Button variant="primary" type='button' size="sm" onClick={addToCart}>Add to Cart</Button>
                        </form>}
                </Card.Body>
                <Card.Footer><small className="float-end text-muted">{product.price}</small></Card.Footer>
            </Card>
        </Col >
    )
}

export default Product