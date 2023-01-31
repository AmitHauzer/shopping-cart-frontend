import Product from "./Product"


function Products({ products }) {
    return (
        <div>
            <h1>Products:</h1>
            {products.map(product => <Product key={product.id} product={product} />)}
        </div>
    )
}

export default Products