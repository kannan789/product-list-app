import React from 'react'
import {Link} from 'react-router-dom';

const ProductList = () => {
  return (
    <div>
        <div className="subHeaderWrapper">
        <h1 className="subHeader">Add item</h1>
        <Link className="addItem" to="/add-item">
          + Add item
        </Link>
      </div>
    </div>
  )
}

export default ProductList
