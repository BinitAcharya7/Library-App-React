import React from 'react'
import headerImage from '../assets/Undraw_Books.svg'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <section id="landing">
        <header>
            <div className="header__container">
                <div className="header__description">
                    <h1>Nepal's most Awarded Online Library Platform</h1>
                    <h2>Find your dream book with <span>Library</span></h2>
                    <a href="#features">
                        <button className="btn">Browse Books</button>
                    </a>
                </div>
                <figure className="header__img--wrapper">
                    <img src={headerImage} alt="library"/>

                </figure>
            </div>
        </header>
    </section>
  )
}
