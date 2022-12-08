import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { AddItem } from "./components/AddItem";
import ProductList from "./components/ProductList";
import Header from "./components/Header";

const getDatafromLS = () => {
  const data = localStorage.getItem("Items");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function App() {
  const [Items, setItems] = useState(getDatafromLS());

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  // form submit event
  const handleAddItemSubmit = (e) => {
    e.preventDefault();
    // creating an object
    const randomNumber = parseInt(Math.random() * 1000000);
    let Item = {
      id: randomNumber,
      title,
      quantity,
      price,
    };
    setItems([...Items, Item]);
    setId("");
    setTitle("");
    setQuantity("");
    setPrice("");
    alert("Product added to the list successfully");
  };

  // delete book from LS
  const deleteItem = (id) => {
    const filteredItems = Items.filter((element, index) => {
      return element.id !== id;
    });
    setItems(filteredItems);
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(Items));
  }, [Items]);

  return (
    <div
      className="wrapper
    "
    >
      <Header />
      <Router>
        <Routes>
          <Route
            path="/add-item"
            element={
              <AddItem
                handleAddItemSubmit={handleAddItemSubmit}
                setTitle={setTitle}
                setQuantity={setQuantity}
                setPrice={setPrice}
                title={title}
                quantity={quantity}
                price={price}
                id={id}
                Items={Items}
                deleteItem={deleteItem}
                setItems={setItems}
              />
            }
          />

          <Route
            path="/"
            element={
              <ProductList
                title={title}
                quantity={quantity}
                price={price}
                Items={Items}
                deleteItem={deleteItem}
                setItems={setItems}
              />
            }
          />

          <Route
            path="/product-list"
            element={
              <ProductList
                title={title}
                quantity={quantity}
                price={price}
                Items={Items}
                deleteItem={deleteItem}
                setItems={setItems}
              />
            }
          />

          <Route
            path="*"
            element={
              <ProductList
                title={title}
                quantity={quantity}
                price={price}
                Items={Items}
                deleteItem={deleteItem}
                setItems={setItems}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
