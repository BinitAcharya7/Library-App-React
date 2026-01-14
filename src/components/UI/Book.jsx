import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import Price from './Price'

export default function Book({ title, img, originalPrice, salePrice, rating, icon, halfIcon }) {
    const [image, setImage] = useState();

 useEffect(() => {
    setImage(undefined);
    const cover = new Image();
    cover.src = img; /* img is just book.url*/
    cover.onload = () =>{
    setTimeout(() => {
        setImage(cover); /* cover is the Image object ; hence image is also set to an object now and we can image.src now */
    }, 500);    
    }; /* just a callback */
}, [img]) /* or rather than doing any of this just do onLoad = onLoad={() => setTimeout(() => setIsLoaded(true), 500)} on the img html tag, useEffect false the setIsLoaded and then just check !isLoaded instead of !image */

  return (
<div className="book">
    {!image ? /* after onload of the cover object, setImage is called and it sets image to img(book.url(cover.src)) */
    <>
    <div className="book__img--skeleton"></div>
    <div className="skeleton book__title--skeleton">
    </div>
    <div className="skeleton book__rating--skeleton"></div>
    <div className="skeleton book__price--skeleton"></div>
    </>
     :
    <>
    <Link to= {`/books/${title.replaceAll(' ', '-')}`} >
        <figure className="book__img--wrapper">
            <img src={image.src} alt="" className="book__img" />
        </figure>
    </Link>
    <div className="book__title">
        <Link to= {`/books/${title.replaceAll(' ', '-')}`} className="book__title--link" alt="">{title}</Link>
    </div>
    <Rating rating={rating} icon={icon} halfIcon={halfIcon}/>
    <Price originalPrice={originalPrice} salePrice={salePrice}/></>}
</div>
  )
}
