import {useEffect, useState} from 'react'
import { getBooks, book } from '../../services/books'
import { fileStorage } from '../../services/storage'
export const Books = () => {
    const [books, setBooks] = useState([])
   

    useEffect(() => {
        getBooks().then(data => {
           
            // const books = data.maps(book => {
            //     const url = fileStorage.getUrl(book.isbn)
            //     return { ...book, url: url }
            // })
            // setBooks(books)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <div className='container'>
                 {books.map((book) => {
                return (
                    <div key={book.isbn} className='card my-4'>
                        {console.log(book)}
                        <div className='card-header'>
                            <h5 className='card-title'>{book.titulo}</h5>
                        </div>
                        <div className='card-body'>
                            <p className='card-text'>isbn: {book.isbn}</p>
                            <p className='card-text'>{book.autor}</p>
                            
                        </div>
                    </div>
                )
            })}
            </div>
           
        </div>
    )
}
