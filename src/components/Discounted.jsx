import React from 'react'
import Book from './UI/Book'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Discounted({books}) {
return (
<section id="discounted">
    <div className="container">
        <div className="row">
            <h2 className="section__title">
                Discounted <span className="purple">Books</span>
            </h2>
            <div className="books">
                {books.filter((book) => book.salePrice !== null).slice(0,8).map((book) => 
                <Book key = {book.id} title = {book.title} img = {book.url} originalPrice = {book.originalPrice} salePrice = {book.salePrice} rating = {book.rating} icon = {<FontAwesomeIcon icon="star" />} halfIcon = {<FontAwesomeIcon icon="star-half-alt" />}/>)}
            </div>
        </div>
    </div>
</section>
  )
}

