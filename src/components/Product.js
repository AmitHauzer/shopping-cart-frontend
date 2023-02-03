import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function Product({ product }) {

    function addToCart(product) {
        let item = {
            product: product.id,
            cart: 1,
            quantity: 1
        }

        fetch(`http://localhost:8000/cart/cartitems/1/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        })
        console.log('added to cart.')
    }

    const handleAddProduct = e => {
        e.preventDefault();
        console.log(product.id)
        addToCart(product)
    }

    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" height="290px" src={'http://localhost:8000/static' + product.image} alt={product.name} />
                <Card.Body>

                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <form method='POST'>
                        <Button variant="primary" type='submit' onClick={handleAddProduct}>Add to Cart</Button>
                    </form>
                </Card.Body>
                <Card.Footer><small className="float-end text-muted">{product.price}</small></Card.Footer>
            </Card>
        </Col>
    )
}

export default Product