import React from 'react'

export default function Price({originalPrice,salePrice}) {
  return (
        <div className="book__price">
        {salePrice?<><span className="book__price--normal">NPR {originalPrice}</span>NPR {salePrice}</> : `NPR ` + originalPrice}
        
    </div>
  )
}
