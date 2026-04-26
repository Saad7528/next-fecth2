import React from 'react';

const BookLoading = () => {
    return (
        <div className='flex ' >
            <h1 className='text-3xl font-bold'>Book Details Loading....</h1>
            <span className="loading loading-spinner text-error"></span>

        </div>
    );
};

export default BookLoading;