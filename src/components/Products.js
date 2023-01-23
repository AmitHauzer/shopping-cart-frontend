import Product from "./Product"


function Products({ products }) {
    return (
        <div>
            <h1>Products:</h1>
            {products.map(product => <Product product={product} />)}
        </div>
    )
}

export default Products