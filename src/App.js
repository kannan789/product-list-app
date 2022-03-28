import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AddItem } from "./AddItem";
// import ProductList from "./ProductList.js";

function App() {
  return (
    <Router>
    <div className="wrapper">
        <h1 className="header">Personal Shopping List</h1>
      </div>
    <Routes>
      {/* <Route path="/" element={<ProductList />} /> */}
    <Route path="/" element={<AddItem />} />
    <Route path="*" element={<AddItem />} />
    </Routes>
    </Router>
  );
}

export default App;
