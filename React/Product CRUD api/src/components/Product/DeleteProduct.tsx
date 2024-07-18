import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductService } from '../../service/ProductService'
/*
useParams()--function--react-router-dom
-used to read data comoing from route/path variable
-it return data in readonly object format
*/
/*
useNavigate()--Function ---react-router-dom
returns NavigateFunction
*/
function DeleteProduct() {
    let navigate=useNavigate()
    /*
    params--readonly object
    {
      pid:1
    }
    */
    const params=useParams<{pid:string}>()
    const productId=params.pid
    useEffect(()=>{
      //call service--deleteProduct()
         if(productId){
            ProductService.deleteProduct(productId).then((response)=>{
              // console.log("Then:"+response);
              navigate("/");
            }).
            catch((error)=>{console.log(error);
            })
      }
    },[])
  return (
    <div>
      {/* <h1>Delete Component</h1>
      <h3>Product ID:{productId}</h3> */}
    </div>
  )
}
 
export default DeleteProduct

