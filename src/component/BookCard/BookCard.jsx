import React from 'react';

const BookCard = ({ book }) => {
    const { title, author, price, description } = book;
    return (
        <div className="card w-96 bg-gray-500  card-md shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{author}</p>
                <p>{price}</p>
                <p>{description}</p>
                <div className="justify-end card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;