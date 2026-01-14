import React from 'react'

export default function Rating({rating,icon, halfIcon}) {
  return(
    <div className="book__ratings">
        {
        new Array(Math.floor(rating)).fill(0).map((_, index) => 
            <span key = {index}>{icon}</span>
        )
        }
        {
            !Number.isInteger(rating)&&halfIcon
        }
    </div>
  )
}
