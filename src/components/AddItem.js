import React from "react";
import { Link } from "react-router-dom";

export const AddItem = (props) => {
  return (
    <div>
      <div className="itemWrapper">
        <Link className="products navButton" to="/">
          &lt; Products
        </Link>

        <h1 className="itemHeader">Add item</h1>
      </div>

      <div className="container form">
        <form
          autoComplete="off"
          className="form-group row g-3"
          onSubmit={props.handleAddItemSubmit}
        >
          <div className="col-12">
            <b>
              <label>Title</label>
            </b>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => props.setTitle(e.target.value)}
              value={props.title}
            ></input>
          </div>

          <div className="col-12">
            <b>
              <label>Quantity</label>
            </b>
            <input
              type="text"
              className="form-control mb-3"
              required
              onChange={(e) => props.setQuantity(e.target.value)}
              value={props.quantity}
            ></input>
          </div>

          <div className="col-12">
            <b>
              <label>Price</label>
            </b>
            <input
              type="number"
              className="form-control mb-3"
              required
              onChange={(e) => props.setPrice(e.target.value)}
              value={props.price}
            ></input>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-lg">
              ADD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
