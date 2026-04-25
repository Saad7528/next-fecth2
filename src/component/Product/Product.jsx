import React from 'react';

const Product = ({ product }) => {
    const {name, price, stock, description} = product;
    return (
        <div className="card w-96 bg-base-100 text-black card-md shadow-sm">
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Price: ${price}</p>
                <p>Price: ${stock}</p>
                <p>{description}</p>
                <div className="justify-end card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default Product;