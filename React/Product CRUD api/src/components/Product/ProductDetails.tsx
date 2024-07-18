// import React, { useEffect } from 'react'
// import { ProductService } from '../../service/ProductService';

// function ProductDetails() {
//     // Component mount/componentdidmount -- call service
//     // useEffect ()Hook - coming from react module
//     // it will get executed right after component mount

//     useEffect(()=>{
//         //code which you want execute right after component mount
//  console.log('Component Mount');
//  //fetch records--call service- async function always return promise- handle it using then catch or await
//  let result =ProductService.getProductDetails();
//  console.log("response in component" + result)
//     },[])


//   return (
//     <div>
      
//     </div>
//   )
// }

// export default ProductDetails






// import React, { useEffect } from 'react'
// import { ProductService } from '../../service/ProductService';
 
// function ProductDetails() {
 
//   /*
//   ComponentMount/componentDidMount --service
//   useEffect() Hook--coming from react module
//   It will get execute right after component Mount
//   useEffect(callback,dependecies[])
//   */
//   useEffect(()=>{
//     //code which you want to execute right after component mount
//     console.log("Component Mount");
//     //Fetch recods--call service--async function always return promise--handle it using then and catch or await
 
//     ProductService.getProductDetails().then((response)=>{
//       console.log("response in Component:"+response);
//     })
//     .catch((error)=>{
//       console.log(error);      
//     })
 
   
//   },[])
//   return (
//     <div>
     
//     </div>
//   )
// }
 
// export default ProductDetails
 




// export interface Product
// {
//     id?:number,
//     productName:string,
//     brandName:string,
//     price:number,
//     quantity:number
// }
 

// import axios from "axios";
// import { Product } from "../model/Product";
 
// export class ProductService
// {
//     //static methods to perform CRUD operations--API
 
//    static url:string="http://localhost:3000/Products";
 
//    static async getProductDetails():Promise<Product[]>
//    {
//         //Get API--axios--install axios
//        let response=await axios.get(this.url);
//        /*
//        response-object
//        properties =values
//        data=[{},{},{}]
//        */
//         console.log(response);        
//        return response.data as Product[];
//    }
// }
 

import React, { useEffect, useState } from 'react'
import { ProductService } from '../../service/ProductService';
import { Product } from '../../model/Product';
import { Link } from 'react-router-dom';
 
function ProductDetails() {
 
 
  // const[products,setProducts]=useState<null|Product[]>(null)//hold data coming from API
 
  const[products,setProducts]=useState<Product[]>([])//hold data coming from API
 
  /*
  The useEffect hook in React is used to perform side effects in functional components. It serves a similar purpose to lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components. Side effects can include data fetching, subscriptions, manually changing the DOM, and more.
  */
  useEffect(()=>{
    //code which you want to execute right after component mount
    console.log("Component Mount");
    //Fetch recods--call service--async function always return promise--handle it using then and catch or await
 
    ProductService.getProductDetails().then((response)=>{
      console.log("response in Component:"+response);
      //Reciving response from service and setting it with in state variable
      setProducts(response)
    })
    .catch((error)=>{
      console.log(error);      
    })    
  },[])
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Brand Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product)=>{
              return<tr>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.brandName}</td>
                <td>{product.price}</td>
                <td><Link to={`product/delete/${product.id}`}>Delete </Link></td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}
 
export default ProductDetails
 
 
 
