import React, { useEffect, useState } from "react";
// import { CustomerService } from "../../service/CustomerService";
import { Customer } from "../../model/Customer";
 import { CustomerService } from "../../service/CustomerService";
import { Link } from "react-router-dom";




function CustomerDetails() {
  const [customers, setCustomers] = useState<Customer[]>([] as Customer[]); //hold data comming from api
 
  useEffect(() => {
    CustomerService.getCustomerDetails()
      .then((response) => {
        setCustomers(response);
      })
      .catch((err: any) => {
        console.log("Customer details: ", err);
      });
  }, []);
  return (
    <div>
      <h1>Customer Details</h1>
      <table align="center" border={1} className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Customer Id</th>
            <th>Customer Name</th>
            <th>Customer Email</th>
            <th>Customer Address</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            return (
              <tr>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.address}</td>
                <td><Link to={`/customer/delete/${customer.id}`}>Delete </Link></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
 
export default CustomerDetails;





