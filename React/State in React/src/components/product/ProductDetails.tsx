import React, { useState } from 'react'

type prop_type={
    name:string
    quantity:number
}
function ProductDetails(props:prop_type) {

    // props.name="AC" // you can not reassign a value to props ,its immutable/read-only
    // state is mutable , you can change the data hold by it
  const [count,setCount]= useState(props.quantity) //asign a props as initial value, but you can modify the state ,not props

  //handler method
  let incrementCount=()=>{
    setCount(count+2)
  }

//   let decrementCount=()=>{
//     setCount(count-2)
//   }

  return (
    <div>
      {props.name}<br></br>
      {props.quantity}
      <hr></hr>
      state example
      <hr></hr>
      {count}<br></br>
      <button onClick={incrementCount}>Increment</button><br></br>
      <button onClick={()=>{setCount(count-2)}}>Decrement</button>
    </div>
  )
}

export default ProductDetails
