import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product({ product }) {
    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" height="290px" src={'http://localhost:8000/static' + product.image} alt={product.name} />
                <Card.Body>

                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
                <Card.Footer><small className="float-end text-muted">{product.price}</small></Card.Footer>
            </Card>
        </Col>
    )
}

export default Product