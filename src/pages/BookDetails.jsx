import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Rating from '../components/UI/Rating'
import Price from '../components/UI/Price'
import Book from '../components/UI/Book'

export default function BookDetails({books, addToCart, cart}) {
  const {title} =  useParams();
  const book = books.find(book => book.title === title.replaceAll('-', ' '));

  function addBookToCart(){
    addToCart(book);
  }

  function bookExists() {
    const exists = cart.some((item) => +item.id === +book.id);
    return exists;
  }

  return (
    <div id="books__body">
        <main id="book__main">
            <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                        <Link to = "/books" className="book__link">
                            <FontAwesomeIcon icon="arrow-left" />
                        </Link>
                        <Link className="book__link" to="/books">
                        <h2 className="book__selected--title--top">
                            Books
                        </h2>
                        </Link>
                    </div>
                    <div className="book__selected">
                        <figure className="book__selected--figure">
                            <img src={book.url} alt="" className="book__selected--img" />
                        </figure>
                        <div className="book__selected--description">
                            <h2 className="book__selected--title">{book.title}</h2>
                            <Rating rating={book.rating} 
                            icon = {<FontAwesomeIcon icon="star" />} halfIcon = {<FontAwesomeIcon icon="star-half-alt" />}/>
                            <div className="book__selected--price">
                                    <Price originalPrice={book.originalPrice} salePrice={book.salePrice}/>
                            </div>
                            <div className="book__summary">
                                <h3 className="book__summary--title">Summary</h3>
                                <p className="book__summary--para">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque asperiores nesciunt maiores libero, iure maxime saepe dolore dolores officia blanditiis sapiente odit tempora aperiam, consectetur facilis. Ad, fugit omnis similique tenetur autem asperiores doloribus saepe est recusandae vero dolores exercitationem suscipit aspernatur animi repudiandae totam sint! Provident maiores expedita maxime.
                                </p>
                                <p className="book__summary--para">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque asperiores nesciunt maiores libero, iure maxime saepe dolore dolores officia blanditiis sapiente odit tempora aperiam, consectetur facilis. Ad, fugit omnis similique tenetur autem asperiores doloribus saepe est recusandae vero dolores exercitationem suscipit aspernatur animi repudiandae totam sint! Provident maiores expedita maxime.
                                </p>
                            </div>
                            {bookExists() ? 
                            <Link to = "/cart" className="book__link">
                            <button className='btn'>Go to Cart</button></Link>:
                            <button className="btn" onClick={() => addBookToCart(book)}>
                                Add to Cart
                            </button>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                        <h2 className="book__selected--title--top">
                            Recommended Books
                        </h2>
                    </div>
                    <div className="books">
                    {
                        books.filter((book) => book.rating === 5 && book.title !== title.replaceAll('-', ' ')).map((book) => <Book key = {book.id} title = {book.title} img = {book.url} originalPrice = {book.originalPrice} salePrice = {book.salePrice} rating = {book.rating} icon = {<FontAwesomeIcon icon="star" />} halfIcon = {<FontAwesomeIcon icon="star-half-alt" />}/>)
                    }
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}
