import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CustomerService } from '../../service/CustomerService';
 
function DeleteCustomer() {
    let navigate = useNavigate();
    const params = useParams<{cid:string}>();
    const customerId = params.cid;
    useEffect(() => {
        if (customerId) {
            CustomerService.deleteCustomer(customerId).then((response) => {
                // console.log(response);
                navigate("/customerdetails");
            }).catch((error) => console.log(error));
        }
    },[]);
  return (
    <div>
        
    </div>
  )
}
 
export default DeleteCustomer




