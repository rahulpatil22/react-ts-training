import axios from "axios";
import { Customer } from "../model/Customer";
 
export class CustomerService
{
    //static methods to perform CRUD operations--API
 
   static url:string="http://localhost:3000/Customers";
 
   static async getCustomerDetails():Promise<Customer[]>
   {
        //Get API--axios--install axios
       let response=await axios.get(this.url);
       /*
       response-object
       properties =values
       data=[{},{},{}]
       */
        console.log(response);        
       return response.data as Customer[];
   }









static async deleteCustomer(customerId:string):Promise<Customer> {
    let response = await axios.delete(`${this.url}/${customerId}`);
    // console.log(response);
    return response.data as Customer;
}



static async addCustomerDetails(customerData: Customer): Promise<Customer> {
    try {
      let response = await axios.post(this.url, customerData);
      return response.data as Customer;
    } catch (error) {
      console.error("Error adding product:", error);
      throw error; // Re-throw the error to handle it upstream
    }
}
}
 