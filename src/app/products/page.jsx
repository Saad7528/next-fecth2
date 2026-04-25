import Product from '@/component/Product/Product';
import React from 'react';

const getProducts = async () => {
    const res = await fetch('http://localhost:5000/products', {cache: 'force-cache'});
    if (!res.ok) {
        throw new Error('Something Wrong')
    }
    return res.json()
}

const ProductsPage = async () => {
    const products = await getProducts();
    return (
        <div>
            <h1>Product: {products.length}</h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    products.map(product => <Product key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default ProductsPage;