import React from 'react';

export const generateStaticParams = async () => {
    const res = await fetch('http://localhost:5000/books');
    const books = await res.json();

    return books.slice(0,3).map(book => ({bookId: book.id}))
}

const BookDetails = async ({ params }) => {
    const { bookId } = await params;
    const res = await fetch(`http://localhost:5000/books/${bookId}`);
    const { title, author, price, description } = await res.json();
    return (
        <div>
            <h1>Book : {bookId}</h1>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p>Author : {author}</p>
            <p>Price : ${price}</p>
            <p>Description : {description}</p>
        </div>
    );
};

export default BookDetails;