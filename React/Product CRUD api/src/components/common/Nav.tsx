// import React from 'react'
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
// import ProductDetails from '../Product/ProductDetails'
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ProductDetails from '../Product/ProductDetails';
import AddProduct from '../Product/AddProduct';
import DeleteProduct from '../Product/DeleteProduct';
import EditProduct from '../Product/EditProduct';
import Demo from '../Product/Demo';
import CustomerDetails from '../Customer/CustomerDetails';
import AddCustomer from '../Customer/AddCustomer';
import DeleteCustomer from '../Customer/DeleteCustomer';
import EditCustomer from '../Customer/EditCustomer';

function Nav() {
  return (
    <div>
      <BrowserRouter>
        <div className='navbar'>
          <Link to='/product/add'>Add Product</Link>
          <Link to='/product/edit'>Edit Product</Link>
          <Link to='/demo'>Demo</Link>
          <Link to='/customerdetails'>Customer Details</Link>
          <Link to='/customer/add'>add Customer </Link>
        </div>

        <Routes>
          <Route path='/' element={<ProductDetails />} />
          <Route path='/customerdetails' element={<CustomerDetails />} />
          <Route path='/demo' element={<Demo />} />


        {/*nested Routes */}
          <Route path='/product'>
            <Route path='add' element={<AddProduct />} />
            <Route path='edit' element={<EditProduct />} />
            <Route path='delete/:pid' element={<DeleteProduct />} />
          </Route>

          <Route path='/customer'>
            <Route path='add' element={<AddCustomer />} />
            {/*Dynamic Routing */}
            <Route path='delete/:cid' element={<DeleteCustomer />} />
            <Route path='edit' element={<EditCustomer />} />
          </Route>

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Nav;

