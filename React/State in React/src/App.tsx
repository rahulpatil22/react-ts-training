import React from 'react';
import logo from './logo.svg';
import './App.css';

import ProductDetails from './components/product/ProductDetails';
import AddProduct from './components/product/AddProduct';
import AddEmployee from './components/Employee/AddEmployee';
import AddCustomer from './components/Customer/AddCustomer';
import Nav from './components/common/Nav';
 
function App() {
  return (
    <div className="App">


      <Nav></Nav>
     {/* <ProductDetails name={"Laptop"} quantity={100}></ProductDetails>
     <hr></hr>
     <AddProduct></AddProduct>
     <hr></hr>
     <AddEmployee></AddEmployee>
     <hr></hr>
     <AddCustomer></AddCustomer> */}
    </div>
  );
}
export default App;