

import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import ProductDetails from '../product/ProductDetails'
import EmployeeDetails from '../Employee/EmployeeDetails'
import AddEmployee from '../Employee/AddEmployee'
import AddProduct from '../product/AddProduct'

function Nav() {
  return (
    <div>
      <BrowserRouter>

      <div className='navbar'>
        <Link to ={"addemployee"}> Add Employeee</Link>
        <br></br>
        <Link to ={"addproduct"}>add Product</Link>
        

      </div>
      <Routes>
      <Route path='/' Component={EmployeeDetails}></Route>
      <Route path='/addemployee' Component={AddEmployee}></Route>
      <Route path='/addproduct' Component={AddProduct}></Route>



      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Nav


