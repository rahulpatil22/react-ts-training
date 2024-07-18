import React, { ChangeEvent, FormEvent, useState } from 'react'
 
function AddProduct() {
    //State Variables --state is object used to hold component information
    const [productName,setProductName]=useState<string>("")
    const [brandName,setBrandName]=useState<string>("")
    const [price,setPrice]=useState<number>(0)
 
    let submitHandler=(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log(productName+"\t"+brandName+"\t"+price);        
    }
 
 
  return (
    <div>
      <form onSubmit={submitHandler}>
        <table>
            <tbody>
            <tr>
                <td><label>Product Name</label></td>
                <td><input type='text'
                            name='productName'
                            value={productName}
                            onChange={(event:ChangeEvent<HTMLInputElement>)=>{setProductName(event.target.value)}}
                            ></input></td>
            </tr>
            <tr>
                <td><label>Brand Name</label></td>
                <td><input
                        type='text'
                        name='brandName'
                        value={brandName}
                        onChange={(event:ChangeEvent<HTMLInputElement>)=>{setBrandName(event.target.value)}}
                        ></input></td>
            </tr>
            <tr>
                <td><label>Price</label></td>
                <td><input
                        type='number'
                        name='price'
                        value={price}
                        onChange={(event:ChangeEvent<HTMLInputElement>)=>{setPrice(parseInt(event.target.value))}}
                        ></input></td>
            </tr>
            <tr>
                <td><input type='submit' value={"Add Product"}></input></td>
                <td><input type='reset' value={"Cancel"}></input></td>
            </tr>
            </tbody>
        </table>
      </form>
    </div>
  )
}
 
export default AddProduct
 