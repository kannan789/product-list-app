import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { View } from "./View";

// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("Items");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const AddItem = () => {
  // item states
  const [Items, setItems] = useState(getDatafromLS());

  // field states
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  // form submit event
  const handleAddItemSubmit = (e) => {
    e.preventDefault();
    // creating an object
    const randomNumber = parseInt(Math.random()*1000000)
    let Item = {
      id:randomNumber,
      title,
      quantity,
      price,
    };
    setItems([...Items, Item]);
    setId('');
    setTitle('');
    setQuantity('');
    setPrice('');
  };

  // delete book from LS
  const deleteItem = (id) => {
    const filteredItems = Items.filter((element, index) => {
      return element.id !== id;
    })
    setItems(filteredItems);
  };

  // const deleteItem = (index) => {
  //   var newList = Items;
  //   newList.splice(index,1)
  //   setItems([...newList])
  // }

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem('Items', JSON.stringify(Items));
  }, [Items]);

  return (
    <div>
      <div className="itemWrapper">
        {/* <Link className="goBack" to="/">
          &lt; Back
        </Link> */}
        <h1 className="itemHeader">Add item</h1>
      </div>

      <div className="form-container">
        <form
          autoComplete="off"
          className="form-group"
          onSubmit={handleAddItemSubmit}
        >
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          ></input>
          <br></br>
          <label>Quantity</label>
          <input
            type="number"
            className="form-control"
            required
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
          ></input>
          <br></br>
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            required
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          ></input>
          <br></br>
          <button type="submit" className="btn btn-success btn-md">
            ADD
          </button>
        </form>
      </div>

      <div className="view-container">
        {Items.length > 0 && 
          <>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <View Items={Items} deleteItem={deleteItem} />
                </tbody>
              </table>
            </div>
            <button
              className="btn btn-danger btn-md"
              onClick={() => setItems([])}
            >
              Remove All
            </button>
          </>
        }
        {Items.length < 1 && <div>No Items are added yet</div>}
      </div>
    </div>
  );
};
