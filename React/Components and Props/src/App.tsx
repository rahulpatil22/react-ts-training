import React from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import Employee from './components/Employee';
import Student from './components/Student';
import Login from './components/Login';

function App() {

 let pname:string="laptop"

 let product = {
  productName:"TV",
  brandName:"LG",
  price:460000
 }

 let employee ={
employeeName:"Rahul",
employeeID:26,
salary:30000
  
 }

 let employees=[
  {
    name:"Sonali Ashish Pawar",
    email:"sonalimi@cybage.com",
    address:"Pune"
  },
  {
    name:"Gaurang Ashish Pawar",
    email:"gaurang@cybage.com",
    address:"Pune"
  },
  {
    name:"Omkar Bajirao Mindhe",
    email:"omkar@cybage.com",
    address:"Delhi"
  }
]

const students = [
  {
    rollNo: 1,
    name: "Amita Dutta",
    address: "Pune",
  },
  {
    rollNo: 2,
    name: "Triveni Patel",
    address: "Pune",
  },
  {
    rollNo: 3,
    name: "Mandar Patil",
    address: "Pune",
  },
  {
    rollNo: 4,
    name: "Aakash Verma",
    address: "Pune",
  },
];

  //JSX-html code
  return(
  <>
  <h1> Welcome to React !!!</h1>
  <h3>Register Form</h3>
  <form>
    <label>Name</label><br></br>
    <input type='text' name='user-name'></input>
  </form>

  <hr></hr>
  {/* <Product productName={pname} quantity={20}></Product> */}
  <Product productDetails={product}></Product>
  
  <hr></hr>
  {/* <Employee employeeDetails={employee} ></Employee> */}
  <Employee emps={employees}></Employee>
  <hr></hr>
 <Student studs={students}></Student>
 <hr></hr>
 {/* String lateral*/}
 {/* <Login status={"success"} ></Login> */}
 <hr />
 {/* Children Props* -- as string/}

 {/* <Login status={"success"} >
  Cybage Software PVT LTD !!!
 </Login> */}

 {/* Children Props as another component */}

  <Login status={"success"} >
 <Employee emps={employees}></Employee>  {/* you can pass child component to another component */}
 </Login>   
 <hr />

 <Login  > 
 {/* optional props : status is optional here using ? in child */}
 <Employee emps={employees}></Employee>  
 </Login>   
 
  </> 
  )
}

export default App;
