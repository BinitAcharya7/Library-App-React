import React from 'react'
import EmptyCart from '../assets/empty_cart.svg'
import { Link } from 'react-router-dom';

export default function Cart({cart, changeQuantity, removeBook}) {

    const total = () => {
        let total = 0;
        cart.forEach(book => {
        total += (book.salePrice || book.originalPrice)*book.quantity
        })
        return total;
    }

    const totalPrice = total();


  return (
    <div id="books__body">
        <div className="main" id="books__main">
            <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                        <h2 className="cart__title">Cart</h2>
                    </div>
                    <div className="cart">
                        <div className="cart__header">
                            <span className="cart__book">Book</span>
                            <span className="cart__quantity">Quantity</span>
                            <span className="cart__total">Price</span>
                        </div>
                        <div className="cart__body">
                            {
                                cart.map((book)=>{
                                    return( 
                                                                    <div className="cart__item" key={book.id}>
                                <div className="cart__book">
                                    <img src={book.url} alt="" className="cart__book--img" />
                                    <div className="cart__book--info">
                                        <span className="cart__book--title">
                                            {book.title}
                                        </span>
                                        <span className="cart__book--price">
                                            NPR {book.salePrice || book.originalPrice}
                                        </span>
                                        <button className="cart__book--remove" onClick = {() => removeBook(book)}>
                                            Remove
                                        </button>
                                    </div>
                                </div>

                                <div className="cart__quantity">
                                    <input type="number" min={0} max={99} value = {book.quantity}className="cart__input" onChange = {(event) => changeQuantity(book, event.target.value)}/>
                                </div>

                                <div className="cart__total">
                                    NPR {(book.salePrice || book.originalPrice)*book.quantity}
                                </div>
                            </div>
                                    )
                                })
                            }

                        </div>
                        {!cart.length && <div className="cart__empty">
                            <img src={EmptyCart} alt="" className="cart__empty--img" />
                            <h2>You don't have any books in your cart!</h2>
                            <Link to="/books">
                            <button className="btn">Browse Books</button>
                            </Link>
                        </div>}
                    </div>
                    {!!cart.length && <div className="total">
                        <div className="total__item total__sub-total">
                            <span>Subtotal</span>
                            <span>NPR {(totalPrice-totalPrice*0.1).toFixed(2)}</span>
                        </div>
                        <div className="total__item total__tax">
                            <span>Tax</span>
                            <span>NPR {(totalPrice*0.1).toFixed(2)}</span>
                        </div>  
                        <div className="total__item total__price">
                            <span>Total</span>
                            <span>NPR {totalPrice.toFixed(2)}</span>
                        </div>
                        <button className="btn btn__checkout no-cursor">
                            Proceed to Checkout
                        </button>
                    </div>}
                </div>
            </div>
        </div>
    </div>
  )
}
