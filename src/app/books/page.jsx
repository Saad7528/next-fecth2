import BookCard from '@/component/BookCard/BookCard';
import React from 'react';


const getBooks = async () =>{
    const res = await fetch('http://localhost:5000/books', {cache: 'no-store'})
    if(!res.ok){
        throw new Error('Somossa ache');
    }
    return res.json();

}

const BooksPage = async () => {
    const books = await getBooks();
    console.log(books);
    return (
        <div>
            <h1>Total Books: {books.length}</h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    books.map(book => <BookCard key={book.id} book={book}/>)
                }
            </div>
            
        </div>
    );
};

export default BooksPage;