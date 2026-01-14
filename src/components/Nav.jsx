import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import libraryLogo from '../assets/Library.svg'
import { Link } from 'react-router-dom';

export default function Nav({numberOfItems}) {

function openMenu() {
document.body.classList.add('menu--open');
}

function closeMenu() {
document.body.classList.remove('menu--open');
}
  return (
    <nav>
       <div className="nav__container">
        <Link to="/">
            <img src={libraryLogo} alt="Brand Logo" className="logo" />
        </Link> 
        <ul className="nav__links">
            <li className="nav__list">
                <Link to="/" className="nav__link">
                    Home
                </Link>
            </li>
            <li className="nav__list">
                <Link to="/books" className="nav__link">
                    Books
                </Link>
            </li>
            <button className="btn__menu" onClick={openMenu}>
                <FontAwesomeIcon icon = "bars" />
            </button>
            <li className="nav__icon">
                <Link to="/cart" className="nav__link">
                <FontAwesomeIcon icon = "shopping-cart" />
                </Link>
                {!!numberOfItems &&
                <span className="cart__length">{numberOfItems}</span>}
            </li>
        </ul>

        <div className="menu__backdrop">
            <button className="button__menu btn__menu--close" onClick={closeMenu}>
                <FontAwesomeIcon icon = "times" />
            </button>
            <ul className="menu__links">
                <li className="menu__list">
                    <Link to="/" className="menu__link">
                    Home
                    </Link>
                </li> 
                <li className="menu__list">
                    <Link to="/books" className="menu__link">
                    Books
                    </Link>
                </li>
                <li className="menu__list">
                    <Link to="/cart" className="menu__link">
                    Cart
                    </Link>
                </li>
            </ul>
        </div>

       </div> 
    </nav>
  )
}
