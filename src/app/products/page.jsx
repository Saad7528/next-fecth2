// import Error from 'next/error';
import React from 'react';

const getProducts = async () =>{
    const res = await fetch('http://localhost:5000/products');
    if(!res.ok){
        throw new Error('Something Wrong')
    }
    return res.json()
}

const ProductsPage = async () => {
    const posts = await getProducts();
    return (
        <div>
            <h1>Product: {posts.length}</h1>
        </div>
    );
};

export default ProductsPage;