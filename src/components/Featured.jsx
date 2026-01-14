import React from 'react'
import Book from './UI/Book'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Featured({books}) {
  return (
    <section id="features">
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    Featured <span className="purple">Books</span>
                </h2>
                <div className="books">
                   {books.filter((book) => book.rating === 5)
                   .slice(0,4)
                   .map((book) => 
                   <Book key = {book.id} title = {book.title} img = {book.url} originalPrice = {book.originalPrice} salePrice = {book.salePrice} rating = {book.rating} icon = {<FontAwesomeIcon icon="star" />}/>)}
                </div>
            </div>
        </div>
    </section>
  )
}
