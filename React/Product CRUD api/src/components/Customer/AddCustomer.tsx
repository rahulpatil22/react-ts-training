
 
 

import React from 'react'
import { useForm } from 'react-hook-form'
import { Customer } from '../../model/Customer';
import { CustomerService } from '../../service/CustomerService';
import { useNavigate } from 'react-router-dom'
import { SubmitHandler } from 'react-hook-form';
 
function AddCustomer() {


  const navigate = useNavigate();
    const {register,handleSubmit} = useForm<Customer>({
        defaultValues: {
            name: "DM",
            email: "DMDMDM@gmail.com",
            address: "456, pqr, stu"
        }
    });
    let submitHandler = (data:Customer) => {
        console.log(data);
    }



    const addCustomerDetails: SubmitHandler<Customer> = (data) => {
      console.log(data);
      CustomerService.addCustomerDetails(data).then(
        response => {
          console.log(response);
          navigate('/customerdetails')
        })
        .catch(error => {
          console.log(error);
          navigate('/customerdetails')
        })
    }
  return (
    <div>
      <form onSubmit={handleSubmit(addCustomerDetails)}>
        <table>
            <tbody>
            <tr>
              <td>Customer Name</td>
              <td><input type='text' {...register("name")}></input></td>
            </tr>
            <tr>
              <td>Customer Email</td>
              <td><input type='text' {...register("email")}></input></td>
            </tr>
            <tr>
              <td>Customer Address</td>
              <td><input type='text' {...register("address")}></input></td>
            </tr>
            <tr>
              <td></td>
              <td><input type='Submit' value={'Add Customer'}></input></td>
            </tr>
            </tbody>
        </table>
      </form>
    </div>
  )
}
 
export default AddCustomer
 
 
 