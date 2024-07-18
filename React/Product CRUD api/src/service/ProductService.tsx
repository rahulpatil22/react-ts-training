// import axios from "axios";
// import { Product } from "../model/Product";

// export class ProductService
// {
//     //statice methods to perform crud opertions-API

//  static url= "http://localhost:3000/Product";

//  static async getProductDetails():Promise<Product[]>
//  {
//     //Get API--axios
//   let response= await axios.get(this.url);

// //   response-object
// //   properties = value  
// //   data = [{},{},{}]

//   return response.data as Product[];
//  }
// }


import axios from "axios";
import { Product } from "../model/Product";
 
export class ProductService
{
    //static methods to perform CRUD operations--API
 
   static url:string="http://localhost:3000/Products";
 
   static async getProductDetails():Promise<Product[]>
   {
        //Get API--axios--install axios
       let response=await axios.get(this.url);
       /*
       response-object
       properties =values
       data=[{},{},{}]
       */
        console.log(response);        
       return response.data as Product[];
   }




 static async deleteProduct(productId:string):Promise<Product>
   {
        let response=await axios.delete(`${this.url}/${productId}`);
        return response.data as Product;
   }



   static async addProductDetails(productData: Product): Promise<Product> {
    try {
      let response = await axios.post(this.url, productData);
      return response.data as Product;
    } catch (error) {
      console.error("Error adding product:", error);
      throw error; // Re-throw the error to handle it upstream
    }
  }



   
}  

 