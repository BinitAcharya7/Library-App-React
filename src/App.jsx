import Home from './pages/Home';
import Footer from './components/Footer';
import Nav from './components/Nav';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Books from './pages/Books';
import { books } from './data'
import BookDetails from './pages/BookDetails';
import Cart from './pages/Cart';
import React, { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  function addToCart(book) {
    // setCart(prevCart => {
    // const exists = prevCart.some((item) => +book.id === item.id)
    // if(exists){
    //     return prevCart.map(item =>
    //       +book.id === +item.id?
    //         {...item, quantity: item.quantity+1}:item); /* only cart items have quantity so we can't do book.quantity+1 */
    //     }
    //   return [...prevCart, {...book, quantity: 1}]}) /* where the new book is added to cart*/

    setCart([...cart, {...book, quantity: 1}]);
    }

function changeQuantity(book, quantity) {
  setCart(cart.map(item => 
    +item.id === +book.id?{...item, quantity: +quantity} : item));
}

function removeBook(book) {
  setCart( prevCart =>
    prevCart.filter(item => +item.id !== +book.id)
  );
}

function numberOfItems() {
  let count = 0;
  for(let item of cart){
    count += item.quantity
  }
  return count;
}
/* EVERYWHERE setCart() exists, it forces a re-render. everytime the rerender happens stuff like total price, cart ko length get caught in the whirlwind and change automatically no need to set a different state for those thingies. 

so only rerender when you add stuff to cart, remove items or change quantities */

/* and look for {... && ...} or {...?: ...} in Cart.jsx to see conditional rendering of simple static stuff like in add to cart or go to cart, you dont have any books, total show or not show, and cart number show or not show, and book loading skeleton states */

  return(
    <Router>
    <div className="App">
      <Nav numberOfItems={numberOfItems()} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books books={books}/>} />
        <Route path="/books/:title" element = {<BookDetails books={books} addToCart={addToCart} cart={cart}/>} />
        <Route path="/cart" element = {<Cart cart = {cart} changeQuantity = {changeQuantity} removeBook = {removeBook} />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );

}
export default App;
