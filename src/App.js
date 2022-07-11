import React from "react";
import Header from "./Containers/Header";
import ProductListing from "./Containers/ProductListing";
import ProductDetails from "./Containers/ProductDetails";
// import ProductComponent from './Containers/ProductComponent'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <h1>I AM HITKUMAR</h1> */}
      <Router>
        <Header />

        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route
            path="/product/:productId"
            exact
            element={<ProductDetails />}
          />
          <Route>404 NOT FOUND</Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
