import React from 'react';

const BookDetails = async ({params}) => {
    const {bookId} = await params;
    console.log(bookId);
    return (
        <div>
            <h1>Book : {bookId}</h1>
        </div>
    );
};

export default BookDetails;