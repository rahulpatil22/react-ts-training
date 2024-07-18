import React from "react";


type prop_type={
    // productName:string,
    // quantity:number
    productDetails:{

productName:string,
brandName:string,
price:number

    } // here productDetails is props as object
}
function Product(props:prop_type){

    return<><> <h1>Product Details</h1>
    </>
    {/* <h1>Product Name:{props.productName}</h1>
    <h1>Quantity:{props.quantity}</h1> */}

    Product Name:{props.productDetails.productName}<br></br>
    Brand Name : {props.productDetails.brandName}<br></br>
    Price :{props.productDetails.price}
    </>

}
export default Product;