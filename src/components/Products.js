import { Container, Row } from 'react-bootstrap';
import Product from "./Product"


function Products({ products }) {
    return (
        <Container>
            <h1>Products:</h1>
            <Row sm={1} md={4} className="g-4">
                {products.map(product => <Product key={product.id} product={product} />)}
            </Row>
        </Container>
    )
}

export default Products